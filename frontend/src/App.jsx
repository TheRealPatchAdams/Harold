{/* Feature Grid */}
<div className="grid md:grid-cols-2 gap-6 mt-12">
  {[
    { title: 'Intuitive Design', description: 'User-friendly interface that just works' },
    { title: 'Fast Performance', description: 'Optimized for speed and efficiency' },
    { title: 'Secure', description: 'Your data is protected with enterprise-grade security' },
    { title: 'Always Available', description: '24/7 support when you need it' },
  ].map((feature, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
