import React, { useState } from "react";
import Talent from "./Talent";

const initialFormState = {
  clientName: "",
  purchaseOrderType: "",
  purchaseOrderNo: "",
  receivedOn: "",
  receivedFrom: { name: "", email: "" },
  poStartDate: "",
  poEndDate: "",
  budget: "",
  currency: "USD",
  talents: [
    {
      name: "",
      duration: "",
      rate: "",
      rateCurrency: "USD",
      standardRate: "",
      standardRateCurrency: "USD",
      overtimeRate: "",
      overtimeRateCurrency: "USD",
      jobTitle: "",
      jobId: "",
    },
  ],
};

const PurchaseForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [isViewMode, setIsViewMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTalentChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTalents = formState.talents.map((talent, idx) =>
      idx === index ? { ...talent, [name]: value } : talent
    );
    setFormState((prevState) => ({
      ...prevState,
      talents: updatedTalents,
    }));
  };

  const addTalent = () => {
    setFormState((prevState) => ({
      ...prevState,
      talents: [
        ...prevState.talents,
        {
          name: "",
          duration: "",
          rate: "",
          rateCurrency: "USD",
          standardRate: "",
          standardRateCurrency: "USD",
          overtimeRate: "",
          overtimeRateCurrency: "USD",
          jobTitle: "",
          jobId: "",
        },
      ],
    }));
  };

  const removeTalent = (index) => {
    const updatedTalents = formState.talents.filter((_, idx) => idx !== index);
    setFormState((prevState) => ({
      ...prevState,
      talents: updatedTalents,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setIsViewMode(true);
  };

  const handleReset = () => {
    setFormState(initialFormState);
    setIsViewMode(false);
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold mb-4">Purchase Order | New</h2>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block mb-1">
                Client Name<span className="text-red-600">*</span>
              </label>
              <select
                name="clientName"
                value={formState.clientName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              >
                <option value="">Select Client</option>
                <option value="Collabera - Collabera Inc">
                  Collabera - Collabera Inc
                </option>
              </select>
            </div>
            <div>
              <label className="block mb-1">
                Purchase Order Type<span className="text-red-600">*</span>
              </label>
              <select
                name="purchaseOrderType"
                value={formState.purchaseOrderType}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              >
                <option value="">Select Type</option>
                <option value="Group PO">Group PO</option>
                <option value="Individual PO">Individual PO</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">
                Purchase Order No.<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="purchaseOrderNo"
                value={formState.purchaseOrderNo}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="PO Number"
                required
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                Received On<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="receivedOn"
                value={formState.receivedOn}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div>
              <label className="block mb-1">
                Received From<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="receivedFromName"
                placeholder="Received From Name"
                value={formState.receivedFrom.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    receivedFrom: {
                      ...formState.receivedFrom,
                      name: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                Email ID<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="receivedFromEmail"
                placeholder="Received From Email ID"
                value={formState.receivedFrom.email}
                required
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    receivedFrom: {
                      ...formState.receivedFrom,
                      email: e.target.value,
                    },
                  })
                }
                className="w-full border border-gray-300 p-2 rounded"
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                PO Start Date<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="poStartDate"
                value={formState.poStartDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                PO End Date<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="poEndDate"
                value={formState.poEndDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                Budget<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="budget"
                value={formState.budget}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Budget"
                required
                disabled={isViewMode}
              />
            </div>
            <div>
              <label className="block mb-1">
                Currency<span className="text-red-600">*</span>
              </label>
              <select
                name="currency"
                value={formState.currency}
                onChange={handleInputChange}
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
        <Talent
        talents={formState.talents}
        handleTalentChange={handleTalentChange}
        addTalent={addTalent}
        removeTalent={removeTalent}
        isViewMode={isViewMode}
      />

        <div className="flex justify-end space-x-4">
          {!isViewMode ? (
            <>
              <button
                type="button"
                onClick={handleReset}
                className="bg-white text-black border border-black px-4 py-1 rounded-full"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full"
              >
                Save
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsViewMode(false)}
              className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;