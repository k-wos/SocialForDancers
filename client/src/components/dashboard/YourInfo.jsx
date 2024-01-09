/* eslint-disable react/prop-types */
const YourInfo = ({ profile }) => {
    return (
        <>
            {profile ? (
                <div className="rounded-lg border-solid p-5">
                    <h2 className="text-2xl font-bold">Twoje informacje</h2>
                    <p className="text-gray-600">
                        LA: {profile.latinClass}, ST: {profile.standardClass}
                    </p>
                    <p className="text-gray-600">
                        Ulubiony taniec: {profile.favouriteDance}
                    </p>
                </div>
            ) : (
                "No profile available"
            )}
        </>
    );
};

export default YourInfo;
