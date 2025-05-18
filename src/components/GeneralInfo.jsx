function GeneralInfo({ info, setInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">General Information</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="p-2 border rounded-md w-full"
        />
        <input
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded-md w-full"
        />
        <input
          name="phone"
          value={info.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </div>
  );
}
export default GeneralInfo;
