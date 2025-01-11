import React from "react";
import MainCategory from "./MainCategory";
import './category.css';

const SpecialtyTrades = () => {
    return (
        <div className="specialty-trades-container">
            <MainCategory>
                <div className="header-section">
                    <h1>Specialty Trades in Construction</h1>
                    <p>
                        Specialty trades are specialized sectors in the construction industry that focus on specific tasks and skill sets. These trades are essential for completing complex construction projects efficiently, ensuring quality and safety. Below, we break down key specialty trades that contribute to the success of every construction project.
                    </p>
                </div>

                <div className="content-section">
                    <div className="trade-card">
                        <h2>🔌 Electrical Work</h2>
                        <p>
                            Electrical contractors handle the installation, maintenance, and repair of electrical systems in buildings. This includes lighting, power distribution, and electrical wiring. Skilled electricians are critical for ensuring safe electrical systems, preventing fire hazards, and optimizing energy efficiency in modern buildings.
                        </p>
                        <ul>
                            <li>Power systems design and installation</li>
                            <li>Residential, commercial, and industrial electrical services</li>
                            <li>Energy-efficient lighting solutions</li>
                            <li>Smart home wiring and automation</li>
                        </ul>
                    </div>

                    <div className="trade-card">
                        <h2>🛠️ Plumbing</h2>
                        <p>
                            Plumbing contractors install, maintain, and repair the piping systems that carry water, gas, and waste throughout buildings. They also install fixtures like sinks, toilets, and bathtubs. Plumbing is essential for ensuring water safety, waste disposal, and the smooth operation of essential systems.
                        </p>
                        <ul>
                            <li>Water supply and drainage systems installation</li>
                            <li>Pipe repair and replacement</li>
                            <li>Gas line installation and repair</li>
                            <li>Water heating system installation (tankless, traditional)</li>
                        </ul>
                    </div>

                    <div className="trade-card">
                        <h2>🔨 Carpentry</h2>
                        <p>
                            Carpenters specialize in working with wood, framing structures, and constructing architectural elements such as windows, doors, and cabinetry. They are experts in creating custom woodwork and structural frameworks that are both functional and aesthetically pleasing.
                        </p>
                        <ul>
                            <li>Building wooden structures, framing, and foundations</li>
                            <li>Custom woodworking and cabinetry</li>
                            <li>Roofing and siding installation</li>
                            <li>Door and window installation</li>
                        </ul>
                    </div>

                    <div className="trade-card">
                        <h2>🧱 Masonry</h2>
                        <p>
                            Masons specialize in working with materials such as brick, stone, concrete, and other masonry units. They create durable, strong structures, from walls and foundations to decorative elements like fireplaces and chimneys.
                        </p>
                        <ul>
                            <li>Brick and stone wall construction</li>
                            <li>Concrete block construction</li>
                            <li>Chimney and fireplace building</li>
                            <li>Stone carving and decorative masonry</li>
                        </ul>
                    </div>

                    <div className="trade-card">
                        <h2>🎨 Painting and Finishing</h2>
                        <p>
                            Painters and finishers apply paint, stain, and finishes to both the interior and exterior of buildings. This trade is responsible for creating the final aesthetic appearance of structures and protecting surfaces from wear and tear, weather, and corrosion.
                        </p>
                        <ul>
                            <li>Interior and exterior painting</li>
                            <li>Staining and varnishing of woodwork</li>
                            <li>Wallpaper installation</li>
                            <li>Surface preparation and repair</li>
                        </ul>
                    </div>

                    <div className="trade-card">
                        <h2>🧰 HVAC (Heating, Ventilation, and Air Conditioning)</h2>
                        <p>
                            HVAC technicians are responsible for installing and maintaining systems that control the temperature, humidity, and air quality of buildings. This includes air conditioning, heating, and ventilation systems that improve the comfort and health of building occupants.
                        </p>
                        <ul>
                            <li>HVAC system design and installation</li>
                            <li>Air conditioning and heating systems repair</li>
                            <li>Indoor air quality systems (humidifiers, air purifiers)</li>
                            <li>Energy-efficient HVAC solutions</li>
                        </ul>
                    </div>
                </div>
            </MainCategory>
        </div>
    );
};

export default SpecialtyTrades;
