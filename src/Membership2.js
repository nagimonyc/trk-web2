import React from "react";
import Header from "./components/Header";
import Subscription2 from "./components/Subscription2";
import teamwork from "../src/images/Frame 30.avif";
import teamwork2 from "../src/images/Frame 7.avif";
import teamwork3 from "../src/images/Frame 40.avif";
import climbWithUsIcon from "../src/images/ComeClimbWithUs.png"
import specialEventIcon from '../src/images/SpecialEvent.png';
import SMRepost from '../src/images/SMRepost.png';
import RopesBoulders from '../src/images/RopesBoulders.png';
import SettingStyle from '../src/images/SettingStyle.png';
import WallVariety from '../src/images/WallVariety.png';
import Workspace from '../src/images/Workspace.png';
import Weightlifting from '../src/images/Weightlifting.png';
import GradingSystem from '../src/images/GradingSystem.png';
import FitnessClass from '../src/images/FitnessClass.png';
import TickIcon from "./components/TickIcon";
import Footer from "./components/Footer";

const Membership2 = () => {
    return (
        <div>
            <Header />
            <div className="membership-container" style={{ minHeight: 0 }}>
                <div className="membership-sizer" style={{ marginBottom: 64 }}>
                    <div style={{ marginBottom: 40, marginTop: 80 }}>
                        <h1 style={{ fontSize: 35, textAlign: 'center' }}>A membership to go <span style={{ color: "#ff6633", backgroundColor: 'rgba(255,101,1,.12)', paddingLeft: "0.225em", paddingRight: "0.225em", borderRadius: '8px', width: '70' }}>wherever you want</span></h1>
                    </div>
                    <Subscription2 />
                </div>
            </div>
            <div className="membership-container" style={{ backgroundColor: 'white', minHeight: 0, marginTop: 48 }}>
                <div className="membership-sizer">
                    <h2 style={{ fontWeight: 500, marginTop: 0 }}>Discover our perks to help you meet new climbers and explore more gyms</h2>
                    <div className="perks-container">
                        <div className="perk-item">
                            <img src={teamwork} alt="Teamwork" className="perk-image" />
                            <h3 style={{}}>Meet New Climbers</h3>
                            <p style={{ fontSize: 16, marginBottom: 48 }}>Get to know the Nagimo community in-person and online.</p>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={climbWithUsIcon} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Come climb with us</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Join our member-only meetups held at a different gym every week (NagiMondays)</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={specialEventIcon} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Attend Specialty Events</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Bring your friends to our one-off events to experience unique and memorable climbing moments.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={SMRepost} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Social Media Reposts</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Get your climbing content reposted and share your progress with the community.</p>
                                </div>
                            </div>
                        </div>
                        <div className="perk-item">
                            <img src={teamwork2} alt="Teamwork" className="perk-image" />
                            <h3>Elevate your Climbing</h3>
                            <p style={{ fontSize: 16, marginBottom: 48 }}>Accelerate your progression with our high variety of climbs and fitness activities.</p>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={SettingStyle} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Expansive Route-Setting Styles</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Each gym will expose you to a different route-setting vision, hold type and setting team. </p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={FitnessClass} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Try Out a Group Fitness Class</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Improve mobility, flexibility and recovery with pilates, yoga, climbing, capoeira, core, and stretching classes.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={WallVariety} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Climbing Wall Variety</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Access to textured and slippery wall surfaces, caves, overhangs and slab climbing gives you endless variety of problems to work on.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={GradingSystem} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Experience Different Grading Systems</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Alternating between V-scale, color grading, circuit grading and YDS will push you to try harder climbs and go outside your comfort zone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="perk-item" style={{}}>
                            <img src={teamwork3} alt="Teamwork" className="perk-image" />
                            <h3>Discover New Gyms</h3>
                            <p style={{ fontSize: 16, marginBottom: 48 }}>Get to know the gyms in Brooklyn and Queens and enjoy their unique characters.</p>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={Workspace} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Make the Most of the Amenities</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Get access to workspaces, kitchens and lockers. Relax in the sauna after an intense session, and watch the sunset from the rooftop.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={Weightlifting} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Vary Your Training</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Enhance your climbing with access to a moonboard, tension board, cardio room, weights/training room and icebath. Film your best performance with tripods located around the gym.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '10%' }}>
                                    <img src={RopesBoulders} alt="Climb with us" style={{ width: 20, height: 20 }} />
                                </div>
                                <div style={{ width: '90%' }}>
                                    <h5 style={{ marginTop: 0, fontSize: 16, marginBottom: 0 }}>Bouldering and Rope Climbing</h5>
                                    <p style={{ fontSize: 14, marginTop: 5 }}>Prefer top or lead? We’ve got you covered too.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="membership-container" style={{ minHeight: 0 }}>
                <div className="membership-sizer">
                    <div className="what-youll-get-container" style={{ marginBottom: 24 }}>
                        <h1 style={{ fontSize: 35 }}>What you'll get</h1>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* titles */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontWeight: "bold" }}>Benefits</p></div>
                                <div style={{ width: '30%', textAlign: 'center' }}><p style={{ fontWeight: "bold" }}>Membership</p></div>
                            </div>
                            {/*  */}
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Bouldering</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Ropes (lead and top) </p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Weekly climbing meetups <span style={{ marginLeft: 8, fontSize: 14, color: 'white', fontWeight: '700', paddingLeft: 7, paddingRight: 7, borderRadius: 4, backgroundColor: 'rgba(255,101,1,1)', letterSpacing: 2 }}>NEW</span></p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Speciality climbing events</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>No initiation fee</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Cancel anytime</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Lockers, showers, kitchens</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Workspaces</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Guaranteed lifetime rate <span style={{ marginLeft: 8, fontSize: 14, color: 'white', fontWeight: '700', paddingLeft: 7, paddingRight: 7, borderRadius: 4, backgroundColor: 'rgba(255,101,1,1)', letterSpacing: 2 }}>NEW</span></p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Sauna and rooftop access</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Varied route-setting styles</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Community reposts <span style={{ marginLeft: 8, fontSize: 14, color: 'white', fontWeight: '700', paddingLeft: 7, paddingRight: 7, borderRadius: 4, backgroundColor: 'rgba(255,101,1,1)', letterSpacing: 2 }}>NEW</span></p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Group Fitness classes <span style={{ marginLeft: 8, fontSize: 14, color: 'white', fontWeight: '700', paddingLeft: 7, paddingRight: 7, borderRadius: 4, backgroundColor: 'rgba(255,101,1,1)', letterSpacing: 2 }}>NEW</span></p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Moonboard and tension board</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Cardio and weights room</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontSize: 14 }}>Varied hold types and wall surfaces</p></div>
                                <div style={{ width: '30%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </div >
    );
};

export default Membership2;