import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Talent= ({
  talents,
  handleTalentChange,
  addTalent,
  removeTalent,
  isViewMode,
}) => {
  return (
    <div className="border-b pb-4">
      <div className="flex w-full justify-between">
        <h2 className="text-xl font-bold mb-4">Talent Details</h2>
        {!isViewMode && (
          <div>
            <button
              type="button"
              onClick={addTalent}
              className="bg-white text-black border border-black px-4 py-2 rounded-full flex font-semibold"
            >
              <span className="mr-2">+</span>Add Another
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {talents.map((talent, index) => (
          <div key={index} className="border p-5 rounded-lg">
            <div className="flex justify-end">
              {index > 0 && !isViewMode && (
                <button
                  type="button"
                  onClick={() => removeTalent(index)}
                  className="text-red-500"
                >
                  <RiDeleteBin6Line size={20} className="text-gray-400"/>
                </button>
              )}
            </div>
            <div className="flex gap-4 mb-4">
              <div>
                <label className="block mb-1">
                  Job Title/REQ Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={talent.jobTitle}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Job ID/REQ ID<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="jobId"
                  value={talent.jobId}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                />
              </div>
            </div>

            <div className="grid grid-cols-8 gap-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={talent.name}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">Contract Duration</label>
                <input
                  type="number"
                  name="duration"
                  value={talent.duration}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Months"
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">Rate</label>
                <input
                  type="number"
                  name="rate"
                  value={talent.rate}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Bill Rate            /hr"
                  required
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Currency
                </label>
                <select
                  name="rateCurrency"
                  value={talent.rateCurrency}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                >
                  <option value="USD">USD - Dollars ($)</option>
                  <option value="INR">INR - Rupees (₹)</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Standard BR</label>
                <input
                  type="number"
                  name="standardRate"
                  value={talent.standardRate}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Std. Time BR      /hr"
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Currency
                </label>
                <select
                  name="standardRateCurrency"
                  value={talent.standardRateCurrency}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                >
                  <option value="USD">USD - Dollars ($)</option>
                  <option value="INR">INR - Rupees (₹)</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Over Time BR</label>
                <input
                  type="number"
                  name="overtimeRate"
                  value={talent.overtimeRate}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Over Time BR    /hr"
                  disabled={isViewMode}
                />
              </div>
              <div>
                <label className="block mb-1">
                  Currency
                </label>
                <select
                  name="overtimeRateCurrency"
                  value={talent.overtimeRateCurrency}
                  onChange={(e) => handleTalentChange(index, e)}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                  disabled={isViewMode}
                >
                  <option value="USD">USD - Dollars ($)</option>
                  <option value="INR">INR - Rupees (₹)</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talent;
