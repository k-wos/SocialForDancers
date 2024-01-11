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

    return <div>ADS</div>;
};

export default Ads;
