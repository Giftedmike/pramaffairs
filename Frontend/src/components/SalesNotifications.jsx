import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SalesNotifications = () => {
  useEffect(() => {
    const names = ['John', 'Mary', 'Ahmed', 'Chioma', 'David', 'Fatima', 'Frankline', 'Kemi', 'Kayode', 'Kelechi'];
    const cities = ['Lagos', 'Abuja', 'Kano', 'Ibadan', 'Kaduna', 'Kebbi', 'Delta'];
    const plans = ['Basic Package', 'Standard Package', 'Pro Package'];

    const showRandomToast = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const plan = plans[Math.floor(Math.random() * plans.length)];

      toast.success(`${name} from ${city} just purchased the ${plan}!`, {
        position: "bottom-right",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const interval = setInterval(() => {
      showRandomToast();
    }, Math.floor(Math.random() * 10000) + 15000); // 20s-30s

    return () => clearInterval(interval);
  }, []);

  return <ToastContainer />;
};

export default SalesNotifications;
