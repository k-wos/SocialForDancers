import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAds } from "../../actions/ad";

const Ads = () => {
    const dispatch = useDispatch();
    const ads = useSelector((state) => state.ad.ads);
    const loading = useSelector((state) => state.ad.loading);

    useEffect(() => {
        dispatch(loadAds());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {ads.map((ad) => (
                <div key={ad._id}>
                    <h2>{ad.title}</h2>
                    <p>{ad.description}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
};

export default Ads;
