const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const color = require("colors");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

app.use(
    cors({
        credentials: true,
        origin: "https://main.d24rzhsjnmveux.amplifyapp.com",
    })
);

//Dotenv Connect
dotenv.config();

//static files
app.use(express.static(path.join(__dirname, "./0-frontend/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./0-frontend/build/index.html"));
});

//Middlerware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ========================================Nodemailer Start========================================

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "utsavvasoya99@gmail.com", //Add Mail Hear
        pass: "qjvronmfrxlcavqq", //Add Password Hear
    },
});

app.get("/test", (req, res) => {
    res.send("Tested ok!!!");
});

app.post("/api/v1/get-a-cash-offer", async (req, res) => {
    await transporter.sendMail(
        {
            from: "utsavvasoya99@gmail.com", // Add Mail Hear
            to: "utsavvasoya99@gmail.com", // Add Mail Hear
            subject: `Get A Cash Offer! ✔ ${req.body.firstName + " " + req.body.lastName
                }`, // Subject line

            text: `Name: ${req.body.firstName + " " + req.body.lastName} email:${req.body.email
                } Phone Number: ${req.body.phoneNumber} Address:${req.body.street +
                ", " +
                req.body.city +
                ", " +
                req.body.state +
                ", " +
                req.body.zipCode
                }`, // plain text body

            html: `<p> 
            <hr>
            Name: ${req.body.firstName + " " + req.body.lastName} 
            <hr> 
            email:${req.body.email}<hr>Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Address:${req.body.street +
                ", " +
                req.body.city +
                ", " +
                req.body.state +
                ", " +
                req.body.zipCode
                }
            <hr>
            Type of Property: ${req.body.propertyType}
            <hr>
            Number of Bedrooms: ${req.body.numberOfBedrooms}, Number of Bathrooms: ${req.body.numberOfBathrooms} and Occupancy: ${req.body.occupancy}
            <hr>
            Approx SQ. Footage: ${req.body.approxSQFootafe}
            <hr>
            Why are you selling?: ${req.body.whySelling}
            <hr>
            What repairs are needed?: ${req.body.repairsNeeded}
            <hr>
            Other Relevant Notes: ${req.body.otherNotes}
            <hr>
            <br> 
            </p>`, // html body
        },
        (err, info) => {
            if (err) {

                res.status(500).send({
                    success: false,
                    message: "Mail Send Error",
                });
            } else {
                res.status(201).send({
                    success: true,
                    message: "Cash Offer Mail Send!!",
                });
            }
        }
    );
});

app.post("/api/v1/contact", async (req, res) => {
    await transporter.sendMail(
        {
            from: "utsavvasoya99@gmail.com", // Add Mail Hear
            to: "utsavvasoya99@gmail.com", // Add Mail Hear
            subject: "Contact Me", // Subject line

            text: `Name: ${req.body.name} email:${req.body.email} Phone Number: ${req.body.phoneNumber} messaage: ${req.body.message}`, // plain text body

            html: `<p> 
            <hr>
            Name: ${req.body.name}
            <hr> 
            email: ${req.body.email}
            <hr>
            Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Message: ${req.body.message}
            <hr>
            <br> 
            </p>`, // html body
        },
        (err, info) => {
            if (err) {

                res.status(500).send({
                    success: false,
                    message: "Mail Send Error",
                });
            } else {
                res.status(201).send({
                    success: true,
                    message: "Contact Mail Send!!",
                });
            }
        }
    );
});

app.post("/api/v1/property-analysis", async (req, res) => {
    await transporter.sendMail(
        {
            from: "utsavvasoya99@gmail.com", // Add Mail Hear
            to: "utsavvasoya99@gmail.com", // Add Mail Hear
            subject: "Home Repair Evolution", // Subject line

            text: `Name: ${req.body.name} email:${req.body.email} Phone Number: ${req.body.phoneNumber} messaage: ${req.body.message}`, // plain text body

            html: `<p> 
            <hr>
            Name: ${req.body.name}
            <hr> 
            email: ${req.body.email}
            <hr>
            Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Address:${req.body.street +
                ", " +
                req.body.city +
                ", " +
                req.body.state +
                ", " +
                req.body.zipCode
                }
            <hr>
            <table >
                <tr>
                    <th>Exterior</th>
                    <td>Back Doors : ${req.body.Exterior_BackDoors}</td>
                    <td>Deck, porch, patio: ${req.body.Exterior_DeckPorchPatio}</td>
                    <td>Doorbell: ${req.body.Exterior_Doorbell}</td>
                    <td>Driveway: ${req.body.Exterior_Driveway}</td>
                    <td>Front Doors : ${req.body.Exterior_FrontDoors}</td>
                    <td>Garage Doors: ${req.body.Exterior_GarageDoors}</td>
                    <td>Garbage receptacle: ${req.body.Exterior_GarbageReceptacle}</td>
                    <td>House number: ${req.body.Exterior_HouseNumber}</td>
                    <td>Mailbox: ${req.body.Exterior_Mailbox}</td>
                    <td>Outdoor lights: ${req.body.Exterior_OutdoorLights}</td>
                    <td>Paint and trim: ${req.body.Exterior_PaintAndTrim}</td>
                    <td>Parking: ${req.body.Exterior_Parking}</td>
                    <td>Recycling receptacle: ${req.body.Exterior_RecyclingReceptacle}</td>
                    <td>Sidewalks: ${req.body.Exterior_Sidewalks}</td>
                    <td>Siding (brick/stone/cement): ${req.body.Exterior_Siding_brick_stone_cement}</td>
                    <td>Traffic noise: ${req.body.TrafficNoise}</td>
                    <td>Windows : ${req.body.Exterior_Windows}</td>
                    <td>Are things loose, cracked, damaged, rotted, bug infested?</td>
                    <td>Notes: ${req.body.ExteriorNote}</td>
                    
                    <hr>
                    
                    <th>Roof</th>
                    <td>Chimney : ${req.body.Exterior_BackDoors}</td>
                    <td>Gutters and downspouts: ${req.body.Exterior_DeckPorchPatio}</td>
                    <td>Soffits and fascia: ${req.body.Exterior_Doorbell}</td>
                    <td>When was it last replaced? Are there encroaching trees?</td>
                    <td>Notes: ${req.body.RoofNote}</td>
                    
                    <hr>
                    
                    <th>Yard</th>
                    <td>Drainage : ${req.body.Yard_Drainage}</td>
                    <td>Fences and gates: ${req.body.Yard_FencesAndGates}</td>
                    <td>Retaining wall: ${req.body.Yard_Retainingwall}</td>
                    <td>Shed: Yard-Shed</td>
                    <td>Sprinklers: ${req.body.Yard_Sprinklers}</td>
                    <td>Swimming pool : ${req.body.Yard_SwimmingPool}</td>
                    <td>Trees, shrubs and lawn dead, dying or bug infested?</td>
                    <td>Notes: ${req.body.YardNote}</td>
                    
                    <hr>
                    
                    <th>Garage</td>
                    <td>Ceiling: ${req.body.Garage_Ceiling}</td>
                    <td>Doors: ${req.body.Garage_Doors}</td>
                    <td>Floors: ${req.body.Garage_Floors}</td>
                    <td>Lights: ${req.body.Garage_Lights}</td>
                    <td>Storage: ${req.body.Garage_Storage}</td>
                    <td>Walls: ${req.body.Garage_Walls}</td>
                    <td>Windows: ${req.body.Garage_Windows}</td>
                    <td>Is the garage door opener operating properly?</td>
                    <td>Notes: ${req.body.GarageNote}</td>
                    
                    <hr>
                    
                    <th>Fireplace</th>
                    <td>Blockages:${req.body.Fireplace_Blockages}</td>
                    <td>Carbon Monoxide Detector:${req.body.Fireplace_CarbonMonoxideDetector}</td>
                    <td>Mantle: ${req.body.Fireplace_Mantle}</td>
                    <td>Soot: ${req.body.Fireplace_Soot}</td>
                    <td>Tiles: ${req.body.Fireplace_Tiles}</td>
                    <td>Any buildup inside? Damage where connected to roof?</td>
                    <td>Notes: ${req.body.FireplaceNote}</td>
                                
                    <hr>
                    
                    <th>Bathrooms</th>
                    <td>Baseboards: ${req.body.Bathrooms_Baseboards}</td>
                    <td>Cabinets, shelves, & drawers: ${req.body.Bathrooms_CabinetsShelvesDrawers}</td>
                    <td>Ceiling: ${req.body.Bathrooms_Ceiling}</td>
                    <td>Counter: ${req.body.Bathrooms_Counter}</td>
                    <td>Doors: ${req.body.Bathrooms_Doors}</td>
                    <td>Floors: ${req.body.Bathrooms_Floors}</td>
                    <td>GFCI outlet: ${req.body.Bathrooms_GFCIOutlet}</td>
                    <td>Lights: ${req.body.Bathrooms_Lights}</td>
                    <td>Mirror: ${req.body.Bathrooms_Mirror}</td>
                    <td>Outlets and switches: ${req.body.Bathrooms_OutletsAndSwitches}</td>
                    <td>Sink: ${req.body.Bathrooms_Sink}</td>
                    <td>Toilet: ${req.body.Bathrooms_Toilet}</td>
                    <td>Towel hook: ${req.body.Bathrooms_TowelHook}</td>
                    <td>Trim: ${req.body.Bathrooms_Trim}</td>
                    <td>Tub and shower: ${req.body.Bathrooms_TubAndShower}</td>
                    <td>Walls: ${req.body.Bathrooms_Walls}</td>
                    <td>Window: ${req.body.Bathrooms_Window}</td>
                    <td>Fixtures secure? Condition of tiles and calking? Leaks or water pressure issues? Mold? Drawers and cabinets working?</td>
                    <td>Notes: ${req.body.BathroomsNote}</td>
                    
                    <hr>
                    
                    <th>Bedrooms</th>
                    <td>Baseboards: ${req.body.Bedrooms_Baseboards}</td>
                    <td>Ceiling: ${req.body.Bedrooms_Ceiling}</td>
                    <td>Closet: ${req.body.Bedrooms_Closet}</td>
                    <td>Doors: ${req.body.Bedrooms_Doors}</td>
                    <td>Floors: ${req.body.Bedrooms_Floors}</td>
                    <td>Lights: ${req.body.Bedrooms_Lights}</td>
                    <td>Outlets and switches: ${req.body.Bedrooms_OutletsAndSwitches}</td>
                    <td>Trim: ${req.body.Bedrooms_Trim}</td>
                    <td>Walls: ${req.body.Bedrooms_Walls}</td>
                    <td>Windows: ${req.body.Bedrooms_Windows}</td>
                    <td>Check ceilings for sloping and/or water damage. Are floors weak in places? Damaged windows or window screens?</td>
                    <td>Notes: ${req.body.BedroomsNote}</td>
                                        
                    <hr>

                    <th>Kitchen</th>
                    <td>Baseboards: ${req.body.Kitchen_Baseboards}</td>
                    <td>Cabinets and drawers: ${req.body.Kitchen_CabinetsAndDrawers}</td>
                    <td>Ceiling: ${req.body.Kitchen_Ceiling}</td>
                    <td>Counter: ${req.body.Kitchen_Counter}</td>
                    <td>Dishwasher: ${req.body.Kitchen_Dishwasher}</td>
                    <td>Floors: ${req.body.Kitchen_Floors}</td>
                    <td>Garbage Disposal: ${req.body.Kitchen_GarbageDisposal}</td>
                    <td>CGFCI outlet: ${req.body.Kitchen_GFCIOutlet}</td>
                    <td>Lights: ${req.body.Kitchen_Lights}</td>
                    <td>Outlets and switches: ${req.body.Kitchen_OutletsAndSwitches}</td>
                    <td>Oven: ${req.body.Kitchen_Oven}</td>
                    <td>Refrigerator: ${req.body.Kitchen_Refrigerator}</td>
                    <td>Sink: ${req.body.Kitchen_Sink}</td>
                    <td>Smoke Detectors: ${req.body.Kitchen_SmokeDetectors}</td>
                    <td>Stove: ${req.body.Kitchen_Stove}</td>
                    <td>Trim: ${req.body.Kitchen_Trim}</td>
                    <td>Walls: ${req.body.Kitchen_Walls}</td>
                    <td>Windows: ${req.body.Kitchen_Walls}</td>
                    <td>Leaking sink or appliances? Cabinet & drawer condition?</td>
                    <td>Notes: ${req.body.KitchenNote}</td>
                    
                    <hr>

                    <th>Stairs</th>
                    <td>Floors: ${req.body.Stairs_Floors}</td>
                    <td>Landing: ${req.body.Stairs_Landing}</td>
                    <td>Lights: ${req.body.Stairs_Lights}</td>
                    <td>Railing: ${req.body.Stairs_Railing}</td>
                    <td>Treads: ${req.body.Stairs_Treads}</td>
                    <td>Walls: ${req.body.Stairs_Walls}</td>
                    <td>Weak stairs? Railings available and secure?</td>
                    <td>Notes: ${req.body.StairsNote}</td>
                    
                    <hr>

                    <th>Dining Room</th>
                    <td>Baseboards: ${req.body.DiningRoom_Baseboards}</td>
                    <td>Ceiling: ${req.body.DiningRoom_Ceiling}</td>
                    <td>Floors: ${req.body.DiningRoom_Floors}</td>
                    <td>Lights: ${req.body.DiningRoom_Lights}</td>
                    <td>Outlets and switches: ${req.body.DiningRoom_OutletsAndSwitches}</td>
                    <td>Trim: ${req.body.DiningRoom_Trim}</td>
                    <td>Walls: ${req.body.DiningRoom_Walls}</td>
                    <td>Windows: ${req.body.DiningRoom_Windows}</td>
                    <td>Wall damage? Sloping ceiling? Weak floors?</td>
                    <td>Notes: ${req.body.DiningRoomNote}</td>
                    
                    <hr>
                    
                    <th>Living Room</th>
                    <td>Baseboards: ${req.body.LivingRoom_Baseboards}</td>
                    <td>Ceiling: ${req.body.LivingRoom_Ceiling}</td>
                    <td>Ceiling fan: ${req.body.LivingRoom_CeilingFan}</td>
                    <td>Doors: ${req.body.LivingRoom_Doors}</td>
                    <td>Floors: ${req.body.LivingRoom_Floors}</td>
                    <td>Lights: ${req.body.LivingRoom_Lights}</td>
                    <td>Outlets and switches: ${req.body.LivingRoom_OutletsAndSwitches}</td>
                    <td>Trim: ${req.body.LivingRoom_Trim}</td>
                    <td>Walls: ${req.body.LivingRoom_Walls}</td>
                    <td>Windows: ${req.body.LivingRoom_Windows}</td>
                    <td>Wall damage? Sloping ceiling? Weak floors?</td>
                    <td>Notes: ${req.body.LivingRoomNote}</td>
                    
                    <hr>
                    
                    <th>Den</th>
                    <td>Baseboards: ${req.body.Den_Baseboards}</td>
                    <td>Ceiling: ${req.body.Den_Ceiling}</td>
                    <td>Ceiling fan: ${req.body.Den_CeilingFan}</td>
                    <td>Doors: ${req.body.Den_Doors}</td>
                    <td>Floors: ${req.body.Den_Floors}</td>
                    <td>Lights: ${req.body.Den_Lights}</td>
                    <td>Outlets and switches: ${req.body.Den_OutletsAndSwitches}</td>
                    <td>Trim: ${req.body.Den_Trim}</td>
                    <td>Walls: ${req.body.Den_Walls}</td>
                    <td>Windows: ${req.body.Den_Windows}</td>
                    <td>Wall damage? Sloping ceiling? Weak floors?</td>
                    <td>Notes: ${req.body.DenNote}</td>
                    
                    <hr>

                    <th>Basement</th>
                    <td>Baseboards: ${req.body.Basement_Baseboards}</td>
                    <td>Ceiling: ${req.body.Basement_Ceiling}</td>
                    <td>Doors: ${req.body.Basement_Doors}</td>
                    <td>Floors: ${req.body.Basement_Floors}</td>
                    <td>Foundation: ${req.body.Basement_Foundation}</td>
                    <td>Lights: ${req.body.Basement_Lights}</td>
                    <td>Outlets and switches: ${req.body.Basement_OutletsandSwitches}</td>
                    <td>Stairs: ${req.body.Basement_Stairs}</td>
                    <td>Storage: ${req.body.Basement_Storage}</td>
                    <td>Sump pump: ${req.body.Basement_SumpPump}</td>
                    <td>Trim: ${req.body.Basement_Trim}</td>
                    <td>Walls: ${req.body.Basement_Walls}</td>
                    <td>Washer and dryer: ${req.body.Basement_WasherAndDryer}</td>
                    <td>Windows: ${req.body.Basement_Windows}</td>
                    <td>Damp, musty or moldy? Beam damage? Bugs?</td>
                    <td>Notes: ${req.body.BasementNote}</td>
                    
                    <hr>
                    
                    <th>Hallways</th>
                    <td>Baseboards: ${req.body.Hallways_Baseboards}</td>
                    <td>Closets: ${req.body.Hallways_Closets}</td>
                    <td>Floors: ${req.body.Hallways_Floors}</td>
                    <td>Lights: ${req.body.Hallways_Lights}</td>
                    <td>Ceiling: ${req.body.Hallways_Ceiling}</td>
                    <td>Outlets and switches: ${req.body.Hallways_OutletsAndSwitches}</td>
                    <td>Skylights: ${req.body.Hallways_Skylights}</td>
                    <td>Trim: ${req.body.Hallways_Trim}</td>
                    <td>Walls: ${req.body.Hallways_Walls}</td>
                    <td>Wall damage? Sloping ceiling? Weak floors?</td>
                    <td>Notes: ${req.body.HallwaysNote}</td>
                    
                    <hr>
                    
                    <th>Utilities</th>
                    <td>Air conditioning: ${req.body.Utilities_AirConditioning}</td>
                    <td>Circuit breakers: ${req.body.Utilities_CircuitBDrainagereakers}</td>
                    <td>Drainage: ${req.body.Utilities_Drainage}</td>
                    <td>Furnace: ${req.body.Utilities_Furnace}</td>
                    <td>Hot water heater: ${req.body.Utilities_HotWaterHeater}</td>
                    <td>Main electrical panel: ${req.body.Utilities_MainElectricalPanel}</td>
                    <td>Water pressure: ${req.body.Utilities_WaterPressure}</td>
                    <td>Functioning properly? Are they new or old?</td>
                    <td>Notes: ${req.body.UtilitiesNote}</td>
                    
                    <hr>
                    
                    <th>Attic</th>
                    <td>Insulation: ${req.body.Attic_Insulation}</td>
                    <td>Ladder: ${req.body.Attic_Ladder}</td>
                    <td>Ventilation: ${req.body.Attic_Ventilation}</td>
                    <td>Leaks, water damage, mold? Sufficient insulation? </td>
                    <td>Notes: ${req.body.AtticNote}</td>
                    
                    <hr>
                    
                    <th>Other</th>
                    <td>Asbestos: ${req.body.Other_Asbestos}</td>
                    <td>Odor: ${req.body.Other_Odor}</td>
                    <td>Wood Eating insects: ${req.body.Other_WoodEatingInsects}</td>
                    <td>Smoke and carbon monoxide detectors in place?</td>
                    <td>Notes: ${req.body.OtherNote}</td>

            </table>
            <br> 
            </p>`, // html body
        },
        (err, info) => {
            if (err) {

                res.status(500).send({
                    success: false,
                    message: "Mail Send Error",
                });
            } else {
                res.status(201).send({
                    success: true,
                    message: "Contact Mail Send!!",
                });
            }
        }
    );
});

// ========================================Nodemailer End==========================================

app.listen(4000, () => { });