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
        <div className="flex flex-col">
            {ads.map((ad) => (
                <div
                    key={ad.id}
                    className="border border-gray-300 rounded-lg p-4 mb-4 flex items-center"
                >
                    <img
                        src={ad.photo}
                        alt="Ad"
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                        <p className="font-bold">Miasto: {ad.city}</p>
                        <p className="font-bold">Płeć: {ad.gender}</p>
                        <p className="font-bold">Wiek: {ad.age}</p>
                        <p className="font-bold">Wzrost: {ad.height}</p>
                        <p className="font-bold">
                            Latin Class: {ad.latinClass}
                        </p>
                        <p className="font-bold">
                            Standard Class: {ad.standardClass}
                        </p>
                        <p className="font-bold">
                            Doświadczeniei: {ad.experience}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ads;
