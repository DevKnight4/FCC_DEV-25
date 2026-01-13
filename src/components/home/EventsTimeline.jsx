import { useNavigate } from 'react-router-dom';

const EventsTimeline = () => {
    const navigate = useNavigate();

    const events = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet",
            date: "Month XX, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet",
            date: "Month XX, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet",
            date: "Month XX, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus."
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet",
            date: "Month XX, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, delectus."
        }
    ];

    const handleTimelineClick = () => {
        navigate('/events');
    };

    const handleEventClick = (e, eventId) => {
        e.stopPropagation();
        navigate('/events');
    };

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* 👇 Heading & Description */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 pb-1">
                        Upcoming Events
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Join us for these exciting events and be part of something extraordinary
                    </p>
                </div>

                <div
                    className="relative cursor-pointer"
                    onClick={handleTimelineClick}
                >
                    {/* Timeline Line */}
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-400 to-blue-600 "></div>

                        {/* Timeline Events */}
                        <div className="space-y-12">
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="relative"
                                >

                                    {/* Dot */}
                                    <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900 z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-400/50"></div>

                                    {/* Date Badge on Timeline */}
                                    <div className={`absolute left-8 md:left-1/2 md:-translate-x-1/2 -top-2 ${index % 2 === 0 ? 'md:-translate-y-8' : 'md:translate-y-8'
                                        } bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap z-20`}>
                                        {event.date.split(',')[0]}
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="md:hidden ml-8 pl-4 pt-6 mt-6">
                                        <div
                                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-5 hover:bg-slate-800/70 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                                            onClick={(e) => handleEventClick(e, event.id)}
                                        >
                                            <div className="mb-3">
                                                <h3 className="text-lg font-bold text-white mb-1 hover:text-cyan-400 transition-colors duration-300">
                                                    {event.title}
                                                </h3>
                                                <div className="text-cyan-400 font-semibold text-sm mb-1">{event.date}</div>
                                                <div className="text-gray-400 text-xs mb-1">{event.time}</div>
                                                <div className="text-gray-400 text-xs mb-2">📍 {event.location}</div>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>


                                    {/* Desktop Layout */}
                                    <div className='hidden md:flex items-center justify-center'>
                                        <div className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                            }`}>

                                            <div
                                                className={`group relative w-5/12 ${index % 2 === 0 ? 'pr-6' : 'pl-6'
                                                    } cursor-pointer transition-all duration-300 hover:scale-105`}
                                                onClick={(e) => handleEventClick(e, event.id)}
                                            >
                                                <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-400/50">
                                                    <div className="mb-3">
                                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                                            {event.title}
                                                        </h3>
                                                        <div className="text-cyan-400 font-semibold mb-1">
                                                            {event.date}
                                                        </div>
                                                        <div className="text-gray-400 text-sm mb-1">
                                                            {event.time}
                                                        </div>
                                                        <div className="text-gray-400 text-sm mb-2">
                                                            📍 {event.location}
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Timeline End Dot */}
                        < div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-gray-900" ></div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-8 md:mt-12">
                        <button
                            onClick={handleTimelineClick}
                            className="cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                        >
                            View All Events
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EventsTimeline;