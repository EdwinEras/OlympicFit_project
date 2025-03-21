export default function MembershipCard({ price, title, features, openModal }) {
  return (
    <div className="bg-silver-slate py-8 rounded-2xl text-center text-brand-200 transform transition duration-500 md:hover:scale-110">
      <h2 className="text-2xl font-semibold mb-4">
        <sup className="text-base">$</sup>
        {price}.00
      </h2>
      <h3 className="text-2xl sm:text-3xl font-bold uppercase">{title}</h3>
      <ul className="mt-8 border-b border-brand-200">
        {features.map((feature, index) => (
          <li key={index} className="border-t border-brand-200 py-2">
            <div className="price_feature-wrap">
              <div className="font-bold">{feature.label}</div>
              <div data-price={feature.dataPrice}>{feature.value}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <button className="bg-red px-4 py-2 rounded gap-2 text-white" onClick={openModal}>
          Subscribe
        </button>
      </div>
    </div>
  );
}
