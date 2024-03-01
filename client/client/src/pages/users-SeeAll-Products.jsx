import { useAuth } from "../store/auth";

export const UsersSellAllProducts = () => {
  const { services } = useAuth();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">All Products</h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="border border-gray-300 px-4 py-2">{service.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{service.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{service.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
