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
        user: "dummy.parth55@gmail.com", //Add Mail Hear
        pass: "odeacnzjwrujsvno", //Add Password Hear
    },
});

app.get("/test", (req, res) => {
    res.send("Tested ok!!!");
});

app.post("/api/v1/get-a-cash-offer", async (req, res) => {
    await transporter.sendMail(
        {
            from: "dummy.parth55@gmail.com", // Add Mail Hear
            to: `${req.body.email}`, // Add Mail Hear
            subject: `Get A Cash Offer! ✔ ${req.body.firstName + " " + req.body.lastName
                }`, // Subject line

            text: `Name: ${req.body.firstName + " " + req.body.lastName} email:${req.body.email} Phone Number: ${req.body.phoneNumber} Address:${req.body.street +
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
            from: "dummy.parth55@gmail.com", // Add Mail Hear
            to: `${req.body.email}`, // Add Mail Hear
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
            from: "dummy.parth55@gmail.com", // Add Mail Hear
            to: `${req.body.email}`, // Add Mail Hear
            subject: "Home Repair Evolution", // Subject line

            text: `Name: ${req.body.name} email:${req.body.email} Phone Number: ${req.body.phoneNumber} messaage: ${req.body.message}`, // plain text body

            html: `
            <hr>
            Name: ${req.body.firstName + " " + req.body.lastName} 
            <hr> 
            email: ${req.body.email}
            <hr>
            Phone Number: ${req.body.phoneNumber} 
            <hr> 
            Address:${req.body.street + ", " + req.body.city + ", " + req.body.state + ", " + req.body.zipCode}
            <hr>
            <table style="width:100%">
                <tr><td><b>Exterior</b></td></tr>
                <tr><td>Back Doors : ${req.body.Exterior_BackDoors}</td></tr>
                <tr><td>Deck, porch, patio: ${req.body.Exterior_DeckPorchPatio}</td></tr>
                <tr><td>Doorbell: ${req.body.Exterior_Doorbell}</td></tr>
                <tr><td>Driveway: ${req.body.Exterior_Driveway}</td></tr>
                <tr><td>Front Doors : ${req.body.Exterior_FrontDoors}</td></tr>
                <tr><td>Garage Doors: ${req.body.Exterior_GarageDoors}</td></tr>
                <tr><td>Garbage receptacle: ${req.body.Exterior_GarbageReceptacle}</td></tr>
                <tr><td>House number: ${req.body.Exterior_HouseNumber}</td></tr>
                <tr><td>Mailbox: ${req.body.Exterior_Mailbox}</td></tr>
                <tr><td>Outdoor lights: ${req.body.Exterior_OutdoorLights}</td></tr>
                <tr><td>Paint and trim: ${req.body.Exterior_PaintAndTrim}</td></tr>
                <tr><td>Parking: ${req.body.Exterior_Parking}</td></tr>
                <tr><td>Recycling receptacle: ${req.body.Exterior_RecyclingReceptacle}</td></tr>
                <tr><td>Sidewalks: ${req.body.Exterior_Sidewalks}</td></tr>
                <tr><td>Siding (brick/stone/cement): ${req.body.Exterior_Siding_brick_stone_cement}</td></tr>
                <tr><td>Traffic noise: ${req.body.TrafficNoise}</td></tr>
                <tr><td>Windows : ${req.body.Exterior_Windows}</td></tr>
                <tr><td>Are things loose, cracked, damaged, rotted, bug infested?</td></tr>
                <tr><td>Notes: ${req.body.ExteriorNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Roof</b></td></tr>
                <tr><td>Chimney : ${req.body.Exterior_BackDoors}</td></tr>
                <tr><td>Gutters and downspouts: ${req.body.Exterior_DeckPorchPatio}</td></tr>
                <tr><td>Soffits and fascia: ${req.body.Exterior_Doorbell}</td></tr>
                <tr><td>When was it last replaced? Are there encroaching trees?</td></tr>
                <tr><td>Notes: ${req.body.RoofNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Yard</b></td></tr>
                <tr><td>Drainage : ${req.body.Yard_Drainage}</td></tr>
                <tr><td>Fences and gates: ${req.body.Yard_FencesAndGates}</td></tr>
                <tr><td>Retaining wall: ${req.body.Yard_Retainingwall}</td></tr>
                <tr><td>Shed: Yard-Shed</td></tr>
                <tr><td>Sprinklers: ${req.body.Yard_Sprinklers}</td></tr>
                <tr><td>Swimming pool : ${req.body.Yard_SwimmingPool}</td></tr>
                <tr><td>Trees, shrubs and lawn dead, dying or bug infested?</td></tr>
                <tr><td>Notes: ${req.body.YardNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Garage</td></tr>
                <tr><td>Ceiling: ${req.body.Garage_Ceiling}</td></tr>
                <tr><td>Doors: ${req.body.Garage_Doors}</td></tr>
                <tr><td>Floors: ${req.body.Garage_Floors}</td></tr>
                <tr><td>Lights: ${req.body.Garage_Lights}</td></tr>
                <tr><td>Storage: ${req.body.Garage_Storage}</td></tr>
                <tr><td>Walls: ${req.body.Garage_Walls}</td></tr>
                <tr><td>Windows: ${req.body.Garage_Windows}</td></tr>
                <tr><td>Is the garage door opener operating properly?</td></tr>
                <tr><td>Notes: ${req.body.GarageNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Fireplace</b></td></tr>
                <tr><td>Blockages:${req.body.Fireplace_Blockages}</td></tr>
                <tr><td>Carbon Monoxide Detector:${req.body.Fireplace_CarbonMonoxideDetector}</td></tr>
                <tr><td>Mantle: ${req.body.Fireplace_Mantle}</td></tr>
                <tr><td>Soot: ${req.body.Fireplace_Soot}</td></tr>
                <tr><td>Tiles: ${req.body.Fireplace_Tiles}</td></tr>
                <tr><td>Any buildup inside? Damage where connected to roof?</td></tr>
                <tr><td>Notes: ${req.body.FireplaceNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Bathrooms</b></td></tr>
                <tr><td>Baseboards: ${req.body.Bathrooms_Baseboards}</td></tr>
                <tr><td>Cabinets, shelves, & drawers: ${req.body.Bathrooms_CabinetsShelvesDrawers}</td></tr>
                <tr><td>Ceiling: ${req.body.Bathrooms_Ceiling}</td></tr>
                <tr><td>Counter: ${req.body.Bathrooms_Counter}</td></tr>
                <tr><td>Doors: ${req.body.Bathrooms_Doors}</td></tr>
                <tr><td>Floors: ${req.body.Bathrooms_Floors}</td></tr>
                <tr><td>GFCI outlet: ${req.body.Bathrooms_GFCIOutlet}</td></tr>
                <tr><td>Lights: ${req.body.Bathrooms_Lights}</td></tr>
                <tr><td>Mirror: ${req.body.Bathrooms_Mirror}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Bathrooms_OutletsAndSwitches}</td></tr>
                <tr><td>Sink: ${req.body.Bathrooms_Sink}</td></tr>
                <tr><td>Toilet: ${req.body.Bathrooms_Toilet}</td></tr>
                <tr><td>Towel hook: ${req.body.Bathrooms_TowelHook}</td></tr>
                <tr><td>Trim: ${req.body.Bathrooms_Trim}</td></tr>
                <tr><td>Tub and shower: ${req.body.Bathrooms_TubAndShower}</td></tr>
                <tr><td>Walls: ${req.body.Bathrooms_Walls}</td></tr>
                <tr><td>Window: ${req.body.Bathrooms_Window}</td></tr>
                <tr><td>Fixtures secure? Condition of tiles and calking? Leaks or water pressure issues? Mold? Drawers and cabinets working?</td></tr>
                <tr><td>Notes: ${req.body.BathroomsNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Bedrooms</b></td></tr>
                <tr><td>Baseboards: ${req.body.Bedrooms_Baseboards}</td></tr>
                <tr><td>Ceiling: ${req.body.Bedrooms_Ceiling}</td></tr>
                <tr><td>Closet: ${req.body.Bedrooms_Closet}</td></tr>
                <tr><td>Doors: ${req.body.Bedrooms_Doors}</td></tr>
                <tr><td>Floors: ${req.body.Bedrooms_Floors}</td></tr>
                <tr><td>Lights: ${req.body.Bedrooms_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Bedrooms_OutletsAndSwitches}</td></tr>
                <tr><td>Trim: ${req.body.Bedrooms_Trim}</td></tr>
                <tr><td>Walls: ${req.body.Bedrooms_Walls}</td></tr>
                <tr><td>Windows: ${req.body.Bedrooms_Windows}</td></tr>
                <tr><td>Check ceilings for sloping and/or water damage. Are floors weak in places? Damaged windows or window screens?</td></tr>
                <tr><td>Notes: ${req.body.BedroomsNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Kitchen</b></td></tr>
                <tr><td>Baseboards: ${req.body.Kitchen_Baseboards}</td></tr>
                <tr><td>Cabinets and drawers: ${req.body.Kitchen_CabinetsAndDrawers}</td></tr>
                <tr><td>Ceiling: ${req.body.Kitchen_Ceiling}</td></tr>
                <tr><td>Counter: ${req.body.Kitchen_Counter}</td></tr>
                <tr><td>Dishwasher: ${req.body.Kitchen_Dishwasher}</td></tr>
                <tr><td>Floors: ${req.body.Kitchen_Floors}</td></tr>
                <tr><td>Garbage Disposal: ${req.body.Kitchen_GarbageDisposal}</td></tr>
                <tr><td>CGFCI outlet: ${req.body.Kitchen_GFCIOutlet}</td></tr>
                <tr><td>Lights: ${req.body.Kitchen_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Kitchen_OutletsAndSwitches}</td></tr>
                <tr><td>Oven: ${req.body.Kitchen_Oven}</td></tr>
                <tr><td>Refrigerator: ${req.body.Kitchen_Refrigerator}</td></tr>
                <tr><td>Sink: ${req.body.Kitchen_Sink}</td></tr>
                <tr><td>Smoke Detectors: ${req.body.Kitchen_SmokeDetectors}</td></tr>
                <tr><td>Stove: ${req.body.Kitchen_Stove}</td></tr>
                <tr><td>Trim: ${req.body.Kitchen_Trim}</td></tr>
                <tr><td>Walls: ${req.body.Kitchen_Walls}</td></tr>
                <tr><td>Windows: ${req.body.Kitchen_Walls}</td></tr>
                <tr><td>Leaking sink or appliances? Cabinet & drawer condition?</td></tr>
                <tr><td>Notes: ${req.body.KitchenNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Stairs</b></td></tr>
                <tr><td>Floors: ${req.body.Stairs_Floors}</td></tr>
                <tr><td>Landing: ${req.body.Stairs_Landing}</td></tr>
                <tr><td>Lights: ${req.body.Stairs_Lights}</td></tr>
                <tr><td>Railing: ${req.body.Stairs_Railing}</td></tr>
                <tr><td>Treads: ${req.body.Stairs_Treads}</td></tr>
                <tr><td>Walls: ${req.body.Stairs_Walls}</td></tr>
                <tr><td>Weak stairs? Railings available and secure?</td></tr>
                <tr><td>Notes: ${req.body.StairsNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Dining Room</b></td></tr>
                <tr><td>Baseboards: ${req.body.DiningRoom_Baseboards}</td></tr>
                <tr><td>Ceiling: ${req.body.DiningRoom_Ceiling}</td></tr>
                <tr><td>Floors: ${req.body.DiningRoom_Floors}</td></tr>
                <tr><td>Lights: ${req.body.DiningRoom_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.DiningRoom_OutletsAndSwitches}</td></tr>
                <tr><td>Trim: ${req.body.DiningRoom_Trim}</td></tr>
                <tr><td>Walls: ${req.body.DiningRoom_Walls}</td></tr>
                <tr><td>Windows: ${req.body.DiningRoom_Windows}</td></tr>
                <tr><td>Wall damage? Sloping ceiling? Weak floors?</td></tr>
                <tr><td>Notes: ${req.body.DiningRoomNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Living Room</b></td></tr>
                <tr><td>Baseboards: ${req.body.LivingRoom_Baseboards}</td></tr>
                <tr><td>Ceiling: ${req.body.LivingRoom_Ceiling}</td></tr>
                <tr><td>Ceiling fan: ${req.body.LivingRoom_CeilingFan}</td></tr>
                <tr><td>Doors: ${req.body.LivingRoom_Doors}</td></tr>
                <tr><td>Floors: ${req.body.LivingRoom_Floors}</td></tr>
                <tr><td>Lights: ${req.body.LivingRoom_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.LivingRoom_OutletsAndSwitches}</td></tr>
                <tr><td>Trim: ${req.body.LivingRoom_Trim}</td></tr>
                <tr><td>Walls: ${req.body.LivingRoom_Walls}</td></tr>
                <tr><td>Windows: ${req.body.LivingRoom_Windows}</td></tr>
                <tr><td>Wall damage? Sloping ceiling? Weak floors?</td></tr>
                <tr><td>Notes: ${req.body.LivingRoomNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Den</b></td></tr>
                <tr><td>Baseboards: ${req.body.Den_Baseboards}</td></tr>
                <tr><td>Ceiling: ${req.body.Den_Ceiling}</td></tr>
                <tr><td>Ceiling fan: ${req.body.Den_CeilingFan}</td></tr>
                <tr><td>Doors: ${req.body.Den_Doors}</td></tr>
                <tr><td>Floors: ${req.body.Den_Floors}</td></tr>
                <tr><td>Lights: ${req.body.Den_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Den_OutletsAndSwitches}</td></tr>
                <tr><td>Trim: ${req.body.Den_Trim}</td></tr>
                <tr><td>Walls: ${req.body.Den_Walls}</td></tr>
                <tr><td>Windows: ${req.body.Den_Windows}</td></tr>
                <tr><td>Wall damage? Sloping ceiling? Weak floors?</td></tr>
                <tr><td>Notes: ${req.body.DenNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Basement</b></td></tr>
                <tr><td>Baseboards: ${req.body.Basement_Baseboards}</td></tr>
                <tr><td>Ceiling: ${req.body.Basement_Ceiling}</td></tr>
                <tr><td>Doors: ${req.body.Basement_Doors}</td></tr>
                <tr><td>Floors: ${req.body.Basement_Floors}</td></tr>
                <tr><td>Foundation: ${req.body.Basement_Foundation}</td></tr>
                <tr><td>Lights: ${req.body.Basement_Lights}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Basement_OutletsandSwitches}</td></tr>
                <tr><td>Stairs: ${req.body.Basement_Stairs}</td></tr>
                <tr><td>Storage: ${req.body.Basement_Storage}</td></tr>
                <tr><td>Sump pump: ${req.body.Basement_SumpPump}</td></tr>
                <tr><td>Trim: ${req.body.Basement_Trim}</td></tr>
                <tr><td>Walls: ${req.body.Basement_Walls}</td></tr>
                <tr><td>Washer and dryer: ${req.body.Basement_WasherAndDryer}</td></tr>
                <tr><td>Windows: ${req.body.Basement_Windows}</td></tr>
                <tr><td>Damp, musty or moldy? Beam damage? Bugs?</td></tr>
                <tr><td>Notes: ${req.body.BasementNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Hallways</b></td></tr>
                <tr><td>Baseboards: ${req.body.Hallways_Baseboards}</td></tr>
                <tr><td>Closets: ${req.body.Hallways_Closets}</td></tr>
                <tr><td>Floors: ${req.body.Hallways_Floors}</td></tr>
                <tr><td>Lights: ${req.body.Hallways_Lights}</td></tr>
                <tr><td>Ceiling: ${req.body.Hallways_Ceiling}</td></tr>
                <tr><td>Outlets and switches: ${req.body.Hallways_OutletsAndSwitches}</td></tr>
                <tr><td>Skylights: ${req.body.Hallways_Skylights}</td></tr>
                <tr><td>Trim: ${req.body.Hallways_Trim}</td></tr>
                <tr><td>Walls: ${req.body.Hallways_Walls}</td></tr>
                <tr><td>Wall damage? Sloping ceiling? Weak floors?</td></tr>
                <tr><td>Notes: ${req.body.HallwaysNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Utilities</b></td></tr>
                <tr><td>Air conditioning: ${req.body.Utilities_AirConditioning}</td></tr>
                <tr><td>Circuit breakers: ${req.body.Utilities_CircuitBDrainagereakers}</td></tr>
                <tr><td>Drainage: ${req.body.Utilities_Drainage}</td></tr>
                <tr><td>Furnace: ${req.body.Utilities_Furnace}</td></tr>
                <tr><td>Hot water heater: ${req.body.Utilities_HotWaterHeater}</td></tr>
                <tr><td>Main electrical panel: ${req.body.Utilities_MainElectricalPanel}</td></tr>
                <tr><td>Water pressure: ${req.body.Utilities_WaterPressure}</td></tr>
                <tr><td>Functioning properly? Are they new or old?</td></tr>
                <tr><td>Notes: ${req.body.UtilitiesNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Attic</b></td></tr>
                <tr><td>Insulation: ${req.body.Attic_Insulation}</td></tr>
                <tr><td>Ladder: ${req.body.Attic_Ladder}</td></tr>
                <tr><td>Ventilation: ${req.body.Attic_Ventilation}</td></tr>
                <tr><td>Leaks, water damage, mold? Sufficient insulation? </td></tr>
                <tr><td>Notes: ${req.body.AtticNote}</td></tr>
                
                <tr><td><hr></td></tr>
                
                <tr><td><b>Other</b></td></tr>
                <tr><td>Asbestos: ${req.body.Other_Asbestos}</td></tr>
                <tr><td>Odor: ${req.body.Other_Odor}</td></tr>
                <tr><td>Wood Eating insects: ${req.body.Other_WoodEatingInsects}</td></tr>
                <tr><td>Smoke and carbon monoxide detectors in place?</td></tr>
                <tr><td>Notes: ${req.body.OtherNote}</td></tr>
            </table>
            <hr >
            <br> 
            `,
            // html body
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