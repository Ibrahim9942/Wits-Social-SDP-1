import Header from "../components/Header";
import { motion } from "framer-motion";


// Helper function for displaying media
const Reels = () => {
    return (
        <motion.div>
            <Header />
            <div className="lg:max-w-4xl min-h-screen mt-14 md:p-3 lg:mx-auto mb-8">
                <div className="h-full w-full bg-transparent flex items-center justify-center">
                </div>
            </div>
        </motion.div>
    );
};

export default Reels;