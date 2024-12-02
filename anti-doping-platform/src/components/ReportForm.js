import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    category: "Doping",
    description: "",
    attachments: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Whistleblower Reporting Channel</h1>
        <p className="text-gray-600 mb-8">
          If you have credible information regarding any suspected doping activities, please use this secure channel to report it.
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-700 text-sm font-semibold mb-2">
              Report Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Doping">Doping</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
              Additional Information
            </label>
            <textarea
              id="description"
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide as much detail as possible. Be specific and descriptive."
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="attachments" className="block text-gray-700 text-sm font-semibold mb-2">
              Attachments (Optional)
            </label>
            <input
              type="file"
              id="attachments"
              name="attachments"
              multiple
              onChange={handleFileChange}
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;