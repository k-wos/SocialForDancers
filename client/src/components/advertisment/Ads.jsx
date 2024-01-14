import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAds } from "../../actions/ad";

const Ads = () => {
    const dispatch = useDispatch();
    const ads = useSelector((state) => state.ad.ads);

    useEffect(() => {
        dispatch(fetchAds());
    }, [dispatch]);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 mt-20">
            <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Ogłoszenia</h2>
            </div>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Użytkownik
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Miasto
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Wiek
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Wzrost
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Klasa La
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Klasa St
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Doświadczenie
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {ads.map((ad) => (
                                <tr key={ad.id} className=" h-40">
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img
                                                    src="https://picsum.photos/id/237/200/300"
                                                    alt="Ad"
                                                    className="rounded-full w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="font-medium text-gray-800">
                                                {ad.user?.firstName}
                                                {ad.user?.lastName}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                            {ad.city}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                            {ad.age}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center">
                                            {ad.height}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center">
                                            {ad.latinClass}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center">
                                            {ad.standardClass}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center">
                                            {ad.experience}
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center"></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Ads;
