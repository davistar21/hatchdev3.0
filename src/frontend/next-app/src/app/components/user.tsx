export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  country: string;
}

const User: React.FC<UserProps> = ({
  firstName,
  lastName,
  username,
  email,
  phone,
  country,
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 text-center">
        <h2 className="text-2xl font-semibold">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-blue-100">@{username}</p>
      </div>

      {/* Info Section */}
      <div className="px-6 py-5 text-gray-800 space-y-3">
        <div className="flex items-center justify-between border-b pb-2">
          <span className="font-medium">Email:</span>
          <span className="text-right">{email}</span>
        </div>
        <div className="flex items-center justify-between border-b pb-2">
          <span className="font-medium">Phone:</span>
          <span className="text-right">{phone}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Country:</span>
          <span className="text-right">{country}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
          Follow
        </button>
      </div>
    </div>
  );
};

export default User;
