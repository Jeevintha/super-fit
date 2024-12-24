import Card from "../components/Card";
import Tooltip from "../components/Tooltip/Tooltip";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-400 to-blue-800">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-white text-center mb-12">About SuperFit</h1>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
                        <p className="text-gray-600 mb-4">
                            SuperFit is dedicated to helping you achieve your fitness goals through
                            simple, effective workout tracking. We believe that measuring progress
                            is key to staying motivated and reaching your potential.
                        </p>
                    </Card>

                    <Card className="p-6">
                        <h2 className="text-2xl font-bold mb-4 text-blue-600">Features</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <Tooltip content="Track your sets, reps, and weights">
                                    <span>📊 Workout Tracking</span>
                                </Tooltip>
                            </li>
                            <li className="flex items-center">
                                <Tooltip content="Calculate your total volume automatically">
                                    <span>📈 Volume Calculator</span>
                                </Tooltip>
                            </li>
                            <li className="flex items-center">
                                <Tooltip content="Keep your workout history saved">
                                    <span>💾 Progress History</span>
                                </Tooltip>
                            </li>
                        </ul>
                    </Card>

                    <Card className="p-6 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 text-blue-600">How to Use</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                1. Navigate to the Track page using the navigation menu
                            </p>
                            <p>
                                2. Enter your workout details including exercise name, weight, reps, and sets
                            </p>
                            <p>
                                3. Save your workout to track your progress over time
                            </p>
                            <p>
                                4. Review your workout history to see how far you've come
                            </p>
                        </div>
                    </Card>
                </div>

                <footer className="text-center mt-12 text-white/80">
                    <p>© 2024 SuperFit. All rights reserved.</p>
                    <p className="text-sm mt-2">
                        Built with React, Tailwind CSS, and dedication to fitness
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default About;