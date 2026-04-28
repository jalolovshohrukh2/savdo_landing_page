'use client';

import { useState, useMemo } from 'react';

/* ── Mock product catalog ── */
const PRODUCTS = [
  { id: 1,  name: 'Coca-Cola 1L',      price: 12.50,  stock: 48,  cat: 'Drinks',   emoji: '🥤' },
  { id: 2,  name: 'Pepsi 0.5L',         price: 8.00,   stock: 36,  cat: 'Drinks',   emoji: '🥤' },
  { id: 3,  name: 'Fanta Orange 1L',    price: 11.00,  stock: 24,  cat: 'Drinks',   emoji: '🍊' },
  { id: 4,  name: 'Water Nestle 1.5L',  price: 5.50,   stock: 60,  cat: 'Drinks',   emoji: '💧' },
  { id: 5,  name: 'Green Tea Lipton',   price: 9.00,   stock: 30,  cat: 'Drinks',   emoji: '🍵' },
  { id: 6,  name: 'Bread White 400g',   price: 4.00,   stock: 20,  cat: 'Bakery',   emoji: '🍞' },
  { id: 7,  name: 'Croissant Butter',   price: 7.50,   stock: 15,  cat: 'Bakery',   emoji: '🥐' },
  { id: 8,  name: 'Lavash Flatbread',   price: 3.50,   stock: 40,  cat: 'Bakery',   emoji: '🫓' },
  { id: 9,  name: 'Non Toki',           price: 3.00,   stock: 50,  cat: 'Bakery',   emoji: '🫓' },
  { id: 10, name: 'Milk 1L 3.2%',       price: 14.00,  stock: 25,  cat: 'Dairy',    emoji: '🥛' },
  { id: 11, name: 'Cheese Gouda 200g',  price: 28.00,  stock: 18,  cat: 'Dairy',    emoji: '🧀' },
  { id: 12, name: 'Yogurt Strawberry',  price: 6.50,   stock: 32,  cat: 'Dairy',    emoji: '🍓' },
  { id: 13, name: 'Butter 200g',        price: 18.00,  stock: 22,  cat: 'Dairy',    emoji: '🧈' },
  { id: 14, name: 'Rice Basmati 1kg',   price: 22.00,  stock: 35,  cat: 'Grocery',  emoji: '🍚' },
  { id: 15, name: 'Sugar 1kg',          price: 10.00,  stock: 50,  cat: 'Grocery',  emoji: '🍬' },
  { id: 16, name: 'Sunflower Oil 1L',   price: 16.00,  stock: 28,  cat: 'Grocery',  emoji: '🫒' },
  { id: 17, name: 'Pasta Spaghetti',    price: 8.50,   stock: 40,  cat: 'Grocery',  emoji: '🍝' },
  { id: 18, name: 'Tomatoes 1kg',       price: 15.00,  stock: 20,  cat: 'Fresh',    emoji: '🍅' },
  { id: 19, name: 'Bananas 1kg',        price: 18.00,  stock: 25,  cat: 'Fresh',    emoji: '🍌' },
  { id: 20, name: 'Apples Red 1kg',     price: 12.00,  stock: 30,  cat: 'Fresh',    emoji: '🍎' },
  { id: 21, name: 'Chips Lays Classic', price: 9.00,   stock: 35,  cat: 'Snacks',   emoji: '🥔' },
  { id: 22, name: 'Chocolate Milka',    price: 19.00,  stock: 20,  cat: 'Snacks',   emoji: '🍫' },
  { id: 23, name: 'Cookies Oreo',       price: 14.50,  stock: 28,  cat: 'Snacks',   emoji: '🍪' },
  { id: 24, name: 'Nuts Almonds 200g',  price: 32.00,  stock: 15,  cat: 'Snacks',   emoji: '🥜' },
];

const CATEGORIES: { key: string; label: string; count: number; bg: string; icon: string }[] = [
  { key: 'All',     label: 'All Items',  count: PRODUCTS.length, bg: 'bg-[#292C2D]', icon: '📋' },
  { key: 'Drinks',  label: 'Drinks',     count: 5,  bg: 'bg-[#C2DBE9]', icon: '🥤' },
  { key: 'Bakery',  label: 'Bakery',     count: 4,  bg: 'bg-[#F1C8D0]', icon: '🍞' },
  { key: 'Dairy',   label: 'Dairy',      count: 4,  bg: 'bg-[#E4CDED]', icon: '🧀' },
  { key: 'Grocery', label: 'Grocery',    count: 4,  bg: 'bg-[#CFDDDB]', icon: '🛒' },
  { key: 'Fresh',   label: 'Fresh',      count: 3,  bg: 'bg-[#C9CAEF]', icon: '🥬' },
  { key: 'Snacks',  label: 'Snacks',     count: 4,  bg: 'bg-[#F1C8D0]', icon: '🍿' },
];

const PAYMENT_METHODS = [
  { id: 'cash',   label: 'Cash',      icon: '$' },
  { id: 'card',   label: 'Bank Card', icon: '▬' },
  { id: 'ewallet',label: 'E-Wallet',  icon: '⊞' },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  stock: number;
  cat: string;
  emoji: string;
  qty: number;
}

export function POSCheckout() {
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPM, setSelectedPM] = useState('cash');
  const [cashInput, setCashInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCat === 'All' || p.cat === activeCat;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCat]);

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id !== id) return i;
      const newQty = i.qty + delta;
      return newQty > 0 ? { ...i, qty: newQty } : i;
    }).filter(i => i.qty > 0));
  };

  const removeItem = (id: number) => setCart(prev => prev.filter(i => i.id !== id));
  const clearCart = () => { setCart([]); setNotes(''); };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const handleNumpad = (val: string) => {
    if (val === 'del') setCashInput(prev => prev.slice(0, -1));
    else if (val === '.') { if (!cashInput.includes('.')) setCashInput(prev => prev + '.'); }
    else setCashInput(prev => prev + val);
  };

  const cashReceived = parseFloat(cashInput) || 0;
  const change = cashReceived - total;

  const completeSale = () => { setShowPayment(false); setShowSuccess(true); };
  const newSale = () => { clearCart(); setShowSuccess(false); setCashInput(''); setSelectedPM('cash'); };
  const getCartQty = (id: number) => cart.find(i => i.id === id)?.qty || 0;

  return (
    <div className="flex h-screen w-screen fixed inset-0 z-[9999] font-sans" style={{ background: '#111315', color: '#fff' }}>
      {/* ── LEFT SIDEBAR ── */}
      <div className="w-[200px] min-w-[200px] flex flex-col p-6 border-r border-[#1e2022]">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center text-xs font-extrabold text-[#111315]">S</div>
          <span className="text-lg font-bold tracking-wide">Savdo</span>
        </div>

        <nav className="flex flex-col gap-0.5 flex-1">
          {['Menu', 'Orders', 'Customers', 'Products', 'Dashboard', 'Reports', 'Settings'].map(item => (
            <button key={item} className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item === 'Menu' ? 'bg-[#292C2D] text-white font-semibold' : 'text-[#676767] hover:text-white hover:bg-[#1e2022]'
            }`}>{item}</button>
          ))}
        </nav>

        <div className="border-t border-[#1e2022] pt-4 mt-auto">
          <div className="text-[0.68rem] text-[#676767] uppercase tracking-widest mb-2.5 px-2">Shift</div>
          {[
            { initials: 'SJ', name: 'Shohrukh J.', bg: 'bg-[#CFDDDB]' },
            { initials: 'AK', name: 'Alisher K.', bg: 'bg-[#E4CDED]' },
            { initials: 'FN', name: 'Farzona N.', bg: 'bg-[#F1C8D0]' },
          ].map(u => (
            <div key={u.initials} className="flex items-center gap-2.5 px-2 py-1.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[0.65rem] font-bold text-[#111315] ${u.bg}`}>{u.initials}</div>
              <span className="text-sm text-white font-medium">{u.name}</span>
            </div>
          ))}
        </div>
        <div className="px-2 mt-3 text-[0.65rem] text-[#3a3d40]">&copy; 2026 Savdo</div>
      </div>

      {/* ── CENTER — Products ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-[#1e2022]">
          <div className="relative flex-1 max-w-[400px]">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#676767] text-sm">&#x2315;</span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#292C2D] border-none rounded-lg text-white text-sm outline-none placeholder:text-[#676767] focus:ring-2 focus:ring-white/10"
            />
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button onClick={() => setShowNotes(true)} className="px-3.5 py-2 rounded-lg border border-[#292C2D] text-[#676767] text-xs hover:text-white hover:border-[#3a3d40] transition-colors">Note</button>
            <button onClick={clearCart} className="px-3.5 py-2 rounded-lg border border-[#292C2D] text-[#676767] text-xs hover:text-white hover:border-[#3a3d40] transition-colors">Clear</button>
          </div>
        </div>

        {/* Categories */}
        <div className="px-6 pt-5">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 mb-5">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCat(cat.key)}
                className={`rounded-xl p-4 text-left min-h-[80px] flex flex-col justify-end relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg ${cat.bg} ${
                  activeCat === cat.key ? 'ring-2 ring-white' : ''
                }`}
              >
                <span className="absolute top-3 left-3.5 text-lg opacity-70">{cat.icon}</span>
                <div className={`text-sm font-semibold ${cat.key === 'All' ? 'text-white' : 'text-[#292C2D]'}`}>{cat.label}</div>
                <div className={`text-xs mt-0.5 ${cat.key === 'All' ? 'text-[#676767]' : 'text-[#292C2D]/60'}`}>{cat.count} items</div>
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1 overflow-y-auto px-6 pb-4 scrollbar-thin">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-3">
            {filteredProducts.map(product => {
              const qty = getCartQty(product.id);
              return (
                <div key={product.id} className={`bg-[#292C2D] rounded-xl p-3.5 transition-all border-[1.5px] ${
                  qty > 0 ? 'border-[#E4CDED]' : 'border-transparent hover:border-[#3a3d40]'
                }`}>
                  <div className={`text-[0.65rem] mb-2 flex items-center gap-1 ${qty > 0 ? 'text-[#E4CDED]' : 'text-[#676767]'}`}>
                    <span>Savdo</span> <span>&rarr;</span> <span>Sale</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5 leading-snug">{product.name}</div>
                  <div className="text-[0.82rem] text-[#676767] font-medium mb-3">{product.price.toFixed(2)} TJS</div>
                  <div className="flex items-center">
                    <button onClick={() => updateQty(product.id, -1)} className="w-8 h-8 rounded-lg border border-[#3a3d40] flex items-center justify-center text-[#676767] hover:border-white hover:text-white transition-colors">&minus;</button>
                    <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                    <button onClick={() => addToCart(product)} className="w-8 h-8 rounded-lg border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors">+</button>
                  </div>
                </div>
              );
            })}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center text-[#676767] py-16 text-sm">No products found</div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-3 px-6 py-3 border-t border-[#1e2022] overflow-x-auto">
          {[
            { badge: 'S1', name: 'Shohrukh J.', info: `${totalItems} items`, color: 'bg-[#C9CAEF]' },
            { badge: 'S2', name: 'Alisher K.', info: 'in process', color: 'bg-[#CFDDDB]' },
            { badge: 'S3', name: 'Farzona N.', info: '3 items', color: 'bg-[#C9CAEF]' },
          ].map(tab => (
            <div key={tab.badge} className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#292C2D] text-[0.78rem] text-white whitespace-nowrap cursor-pointer hover:bg-[#3a3d40] transition-colors">
              <span className={`${tab.color} text-[#292C2D] px-2 py-0.5 rounded text-[0.7rem] font-bold`}>{tab.badge}</span>
              {tab.name}
              <span className={`text-[0.68rem] ${tab.info === 'in process' ? 'bg-[#CFDDDB] text-[#292C2D] px-2 py-0.5 rounded font-semibold' : 'text-[#676767]'}`}>
                {tab.info}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Order Panel ── */}
      <div className="w-[320px] min-w-[320px] flex flex-col border-l border-[#1e2022]" style={{ background: '#1a1c1e' }}>
        <div className="flex items-center justify-between px-5 py-[18px] border-b border-[#1e2022]">
          <div>
            <div className="text-base font-bold">Current Sale</div>
            <div className="text-[0.72rem] text-[#676767] mt-0.5">Shohrukh J.</div>
          </div>
          <button className="w-8 h-8 rounded-full border border-[#292C2D] flex items-center justify-center text-[#676767] hover:border-white hover:text-white transition-colors text-sm">&#9998;</button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#3a3d40]">
              <div className="text-4xl mb-3 opacity-40">&#9651;</div>
              <div className="text-sm text-[#676767]">No items added</div>
              <div className="text-[0.72rem] text-[#3a3d40] mt-1.5">Choose category</div>
            </div>
          ) : (
            cart.map((item, i) => (
              <div key={item.id} className="group flex items-center gap-3 px-5 py-3 border-b border-[#1e2022] hover:bg-white/[0.02] transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#292C2D] flex items-center justify-center text-[0.7rem] font-bold shrink-0">{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-[0.85rem] font-semibold">{item.name}</span>
                  <span className="text-[0.78rem] text-[#676767] ml-1">x{item.qty}</span>
                </div>
                <div className="text-[0.88rem] font-bold whitespace-nowrap">{(item.price * item.qty).toFixed(2)} TJS</div>
                <button onClick={() => removeItem(item.id)} className="text-[#3a3d40] opacity-0 group-hover:opacity-100 hover:text-[#F1C8D0] text-sm transition-all p-1 rounded">&times;</button>
              </div>
            ))
          )}
        </div>

        {/* Summary + Payment */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-[#1e2022]">
            <div className="flex justify-between py-1 text-[0.82rem] text-[#676767]">
              <span>Subtotal</span>
              <span className="font-semibold text-white">{subtotal.toFixed(2)} TJS</span>
            </div>
            <div className="flex justify-between py-1 text-[0.82rem] text-[#676767]">
              <span>Tax 10%</span>
              <span className="font-semibold text-white">{tax.toFixed(2)} TJS</span>
            </div>
            <div className="flex justify-between pt-3 mt-2 border-t border-dashed border-[#292C2D] text-lg font-bold">
              <span>Total</span>
              <span>{total.toFixed(2)} TJS</span>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="px-5 pb-2">
            <div className="text-[0.72rem] text-[#676767] mb-2">Payment Method</div>
            <div className="flex gap-2">
              {PAYMENT_METHODS.map(pm => (
                <div key={pm.id} className="text-center">
                  <button
                    onClick={() => setSelectedPM(pm.id)}
                    className={`w-11 h-11 rounded-[10px] border-[1.5px] flex items-center justify-center text-lg transition-colors ${
                      selectedPM === pm.id ? 'border-white bg-[#292C2D] text-white' : 'border-[#292C2D] text-[#676767] hover:border-white hover:text-white'
                    }`}
                  >{pm.icon}</button>
                  <div className="text-[0.58rem] text-[#676767] mt-1">{pm.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="px-5 pb-5 pt-3">
          <button
            disabled={cart.length === 0}
            onClick={() => setShowPayment(true)}
            className="w-full py-3.5 rounded-[10px] text-[0.92rem] font-bold transition-colors disabled:bg-[#292C2D] disabled:text-[#676767] disabled:cursor-not-allowed bg-white text-[#111315] hover:bg-[#e8e8e8]"
          >Place Order</button>
        </div>
      </div>

      {/* ── NOTES MODAL ── */}
      {showNotes && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10000]" onClick={() => setShowNotes(false)}>
          <div className="bg-[#1a1c1e] rounded-2xl border border-[#292C2D] w-[400px]" onClick={e => e.stopPropagation()}>
            <div className="px-6 pt-6"><h3 className="text-base font-bold">Sale Notes</h3></div>
            <div className="p-6">
              <textarea
                placeholder="Add a note for this sale..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
                autoFocus
                className="w-full h-24 p-3 bg-[#292C2D] border border-[#3a3d40] rounded-[10px] text-white text-sm outline-none resize-none placeholder:text-[#676767] focus:border-[#676767]"
              />
            </div>
            <div className="flex gap-2.5 px-6 pb-6">
              <button onClick={() => setShowNotes(false)} className="flex-1 py-3 rounded-[10px] border border-[#292C2D] text-[#676767] text-sm font-semibold hover:text-white hover:border-[#3a3d40] transition-colors">Cancel</button>
              <button onClick={() => setShowNotes(false)} className="flex-1 py-3 rounded-[10px] bg-white text-[#111315] text-sm font-semibold hover:bg-[#e8e8e8] transition-colors">Save Note</button>
            </div>
          </div>
        </div>
      )}

      {/* ── PAYMENT MODAL ── */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10000]" onClick={() => setShowPayment(false)}>
          <div className="bg-[#1a1c1e] rounded-2xl border border-[#292C2D] w-[440px] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="px-6 pt-6">
              <h3 className="text-base font-bold">Order #{String(Math.floor(Math.random() * 900) + 100)}</h3>
            </div>
            <div className="px-6 py-5">
              {/* Summary */}
              <div className="mb-5">
                <div className="flex justify-between py-1.5 text-sm text-[#676767]"><span>Subtotal</span><span className="font-semibold text-white">{subtotal.toFixed(2)} TJS</span></div>
                <div className="flex justify-between py-1.5 text-sm text-[#676767]"><span>Tax 10%</span><span className="font-semibold text-white">{tax.toFixed(2)} TJS</span></div>
                <div className="flex justify-between pt-3 mt-2 border-t border-[#292C2D] text-lg font-bold"><span>Total</span><span>{total.toFixed(2)} TJS</span></div>
              </div>

              {/* Numpad (cash) */}
              {selectedPM === 'cash' && (
                <div className="mt-4">
                  <div className="text-right p-3 bg-[#292C2D] rounded-[10px] mb-3">
                    <div className="text-[0.72rem] text-[#676767] mb-1">Received</div>
                    <div className="text-2xl font-bold">{cashInput || '0.00'}</div>
                  </div>
                  {cashReceived > 0 && (
                    <div className="flex justify-between py-3 text-sm">
                      <span className="text-[#676767]">Change</span>
                      <span className={`font-bold ${change >= 0 ? 'text-[#CFDDDB]' : 'text-[#F1C8D0]'}`}>{change.toFixed(2)} TJS</span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2">
                    {['1','2','3','4','5','6','7','8','9','.','0'].map(n => (
                      <button key={n} onClick={() => handleNumpad(n)} className="py-4 rounded-[10px] bg-[#292C2D] text-white text-lg font-semibold hover:bg-[#3a3d40] active:bg-[#444749] transition-colors">{n}</button>
                    ))}
                    <button onClick={() => handleNumpad('del')} className="py-4 rounded-[10px] bg-[#292C2D] text-[#F1C8D0] text-lg font-semibold hover:bg-[#3a3d40] transition-colors">&times;</button>
                  </div>
                </div>
              )}

              {/* Payment method */}
              <div className="mt-4">
                <div className="text-[0.72rem] text-[#676767] mb-2">Payment Method</div>
                <div className="flex gap-2">
                  {PAYMENT_METHODS.map(pm => (
                    <button key={pm.id} onClick={() => setSelectedPM(pm.id)} className={`px-4 py-2.5 rounded-[10px] border-[1.5px] text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      selectedPM === pm.id ? 'border-white bg-[#292C2D] text-white' : 'border-[#292C2D] text-[#676767] hover:border-white hover:text-white'
                    }`}>{pm.icon} {pm.label}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 px-6 pb-6">
              <button onClick={() => { setShowPayment(false); setCashInput(''); }} className="flex-1 py-3 rounded-[10px] border border-[#292C2D] text-[#676767] text-sm font-semibold hover:text-white hover:border-[#3a3d40] transition-colors">Print Receipt</button>
              <button onClick={completeSale} className="flex-1 py-3 rounded-[10px] bg-white text-[#111315] text-sm font-semibold hover:bg-[#e8e8e8] transition-colors">Apply</button>
            </div>
          </div>
        </div>
      )}

      {/* ── SUCCESS ── */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[10001]">
          <div className="bg-[#1a1c1e] rounded-[20px] p-12 text-center border border-[#292C2D] max-w-[380px] w-full">
            <div className="w-[72px] h-[72px] rounded-full bg-[#292C2D] border-2 border-[#CFDDDB] flex items-center justify-center mx-auto mb-5 text-3xl">&#10003;</div>
            <h3 className="text-xl font-bold mb-1.5">Payment Successful</h3>
            <p className="text-[#676767] text-sm mb-5">Sale completed</p>
            <div className="text-3xl font-extrabold mb-7">{total.toFixed(2)} TJS</div>
            <div className="flex gap-2.5">
              <button onClick={newSale} className="flex-1 py-3 rounded-[10px] border border-[#292C2D] text-[#676767] text-sm font-semibold hover:text-white hover:border-[#3a3d40] transition-colors">Print Receipt</button>
              <button onClick={newSale} className="flex-1 py-3 rounded-[10px] bg-white text-[#111315] text-sm font-semibold hover:bg-[#e8e8e8] transition-colors">New Sale</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
