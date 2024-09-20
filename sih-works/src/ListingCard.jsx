import React from "react";

const ListingCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      <div className="bg-cover bg-center rounded-lg shadow-lg p-8 w-full max-w-md"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/459369/pexels-photo-459369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}>
        <h2 className="text-white text-2xl font-bold mb-4">Listing 1</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter category"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter quantity"
            />
          </div>

          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 flex items-center"
            >
              ADD
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-2 bg-white text-black text-xxs font-bold rounded-full hover:bg-gray-200 flex items-center"
            >
              UPLOAD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingCard;