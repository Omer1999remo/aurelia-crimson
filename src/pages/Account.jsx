import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { mockOrders } from '../data';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Button from '../components/ui/Button';
import { Package, Heart, User, MapPin, LogOut } from 'lucide-react';

const ORDERS_KEY = 'mock_orders';

function getStoredOrders() {
  const raw = localStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : mockOrders;
}

function storeOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export default function Account() {
  const { user, profile, signOut, loading: authLoading } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      setOrders(getStoredOrders());
      setLoading(false);
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const tabs = [
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 shrink-0">
            <div className="bg-white/5 border border-gold/35 rounded p-6 mb-6">
              <div className="text-gold text-2xl font-serif mb-1">
                {profile?.full_name || 'Welcome'}
              </div>
              <div className="text-white/60 text-sm">{user?.email}</div>
            </div>

            <nav className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded text-left transition-all ${activeTab === tab.id ? 'bg-gold text-ink' : 'text-white hover:bg-white/5'}`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded text-left text-crimson-light hover:bg-crimson-light/10 transition-all"
              >
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </nav>
          </aside>

          <main className="flex-1">
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-gold text-3xl font-serif mb-6">Order History</h2>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="bg-white/5 border border-gold/35 rounded p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="text-white font-medium">Order #{order.id.slice(0, 8)}</div>
                            <div className="text-white/60 text-sm">
                              {new Date(order.created_at).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`px-3 py-1 rounded text-sm ${order.status === 'delivered' ? 'bg-green-400/20 text-green-400' : order.status === 'shipped' ? 'bg-blue-400/20 text-blue-400' : 'bg-gold/20 text-gold'}`}>
                              {order.status?.toUpperCase()}
                            </div>
                            <div className="text-gold text-lg font-semibold mt-2">
                              ${order.total?.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {order.order_items?.map(item => (
                            <div key={item.id} className="shrink-0 w-20 h-20 rounded overflow-hidden border border-gold/25">
                              <img src={item.product_image} alt={item.product_name} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package className="mx-auto text-gold/50 mb-4" size={48} />
                    <p className="text-white/60 mb-4">No orders yet</p>
                    <Link to="/shop">
                      <Button>Start Shopping</Button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-gold text-3xl font-serif mb-6">Wishlist</h2>
                {wishlist.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlist.map(item => (
                      <div key={item.id} className="bg-white/5 border border-gold/35 rounded overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <div className="text-white font-medium mb-1">{item.name}</div>
                          <div className="text-gold mb-3">${item.price?.toLocaleString()}</div>
                          <div className="flex gap-2">
                            <Link to={`/product/${item.id}`} className="flex-1">
                              <Button className="w-full text-sm" size="sm">View</Button>
                            </Link>
                            <Button variant="secondary" size="sm" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="mx-auto text-gold/50 mb-4" size={48} />
                    <p className="text-white/60 mb-4">Your wishlist is empty</p>
                    <Link to="/shop">
                      <Button>Browse Collection</Button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-gold text-3xl font-serif mb-6">Profile Settings</h2>
                <div className="bg-white/5 border border-gold/35 rounded p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Full Name</label>
                      <div className="text-white text-lg">{profile?.full_name || 'Not set'}</div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Email</label>
                      <div className="text-white text-lg">{user?.email}</div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1">Phone</label>
                      <div className="text-white text-lg">{profile?.phone || 'Not set'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-gold text-3xl font-serif mb-6">Saved Addresses</h2>
                <div className="text-center py-12">
                  <MapPin className="mx-auto text-gold/50 mb-4" size={48} />
                  <p className="text-white/60 mb-4">No addresses saved</p>
                  <Button variant="secondary">Add Address</Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
