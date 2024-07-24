import React from "react";
import Header from "./components/Header";
import Subscription2 from "./components/Subscription2";
import teamwork from "../src/images/IMG_6777-12.png";
import TickIcon from "./components/TickIcon";

const Membership2 = () => {
    return (
        <div>
            <Header />
            <div className="membership-container" style={{ minHeight: 0 }}>
                <div className="membership-sizer" style={{ marginBottom: 64 }}>
                    <div style={{ marginBottom: 40, marginTop: 80 }}>
                        <h1 style={{ fontSize: 60, textAlign: 'center' }}>A membership to go <span style={{ color: "#ff6633", backgroundColor: 'rgba(255,101,1,.12)', paddingLeft: "0.225em", paddingRight: "0.225em", borderRadius: '8px', width: '70' }}>wherever you want</span></h1>
                    </div>
                    <Subscription2 />
                </div>
            </div>
            <div className="membership-container" style={{ backgroundColor: 'white', minHeight: 0, marginTop: 48 }}>
                <div className="membership-sizer">
                    <h2 style={{ fontWeight: 500, marginTop: 0 }}>Unlock new features that help you reach your goals and have more fun.</h2>
                    <div className="perks-container">
                        <div className="perk-item">
                            <img src={teamwork} alt="Teamwork" className="perk-image" />
                            <h4>Compete on Segments</h4>
                            <p>Challenge yourself against your past efforts, your friends and millions of other athletes.</p>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                        </div>
                        <div className="perk-item">
                            <img src={teamwork} alt="Teamwork" className="perk-image" />
                            <h4>Compete on Segments</h4>
                            <p>Challenge yourself against your past efforts, your friends and millions of other athletes.</p>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                        </div>
                        <div className="perk-item">
                            <img src={teamwork} alt="Teamwork" className="perk-image" />
                            <h4>Compete on Segments</h4>
                            <p>Challenge yourself against your past efforts, your friends and millions of other athletes.</p>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                            <div className="besides-container">
                                <div style={{ width: '15%' }}>[]</div>
                                <div style={{ width: '85%' }}>
                                    <h5 style={{ marginTop: 0 }}>Compete on Segments</h5>
                                    <p>Keep track of your progress and see how you stack up against your friends on your favorite portions of roads or trails.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="membership-container" style={{ minHeight: 0 }}>
                <div className="membership-sizer">
                    <div className="what-youll-get-container" style={{}}>
                        <h1>What you'll get</h1>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* titles */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p style={{ fontWeight: "bold" }}>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center' }}><p style={{ fontWeight: "bold" }}>Membership</p></div>
                            </div>
                            {/*  */}
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                            <div style={{ border: '0.001px solid gray' }}></div>
                            {/* b1 */}
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div><p>Benefits</p></div>
                                <div style={{ width: '55%', textAlign: 'center', alignSelf: 'center' }}><TickIcon /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership2;
