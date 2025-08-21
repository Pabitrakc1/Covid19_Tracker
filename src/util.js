// import numeral from "numeral";
// import { Circle, Popup } from "react-leaflet";

// const casesTypeColors = {
//     cases: {
//         hex: "#CC1034",
//         rbg: "rgb(204, 16, 52)",
//         half_op: "rgba(204, 16, 52, 0.5)",
//         multiplier: 800,
//     },
//     recovered: {
//         hex: "#7dd71d",
//         rgb: "rgb(125, 215, 29)",
//         half_op: "rgba(125, 215, 29, 0.5)",
//         multiplier: 1200,
//     },
//     deaths: {
//         hex: "#fb4443",
//         rgb: "rgb(251, 68, 67)",
//         half_op: "rgba(251, 68, 67, 0.5)",
//         multiplier: 2000,
//     },
// };

// export const sortData = (data) => {
//     const sortedData = [...data];

//     // sortedData.sort((a, b) => {
//     //     if(a.cases > b.cases){
//     //         return -1; -> False
//     //     }
//     //     else{
//     //         return 1; -> True 
//     //     }
//     // });
//     // return sortedData;

//     return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
// };

// export const showDataOnMap = (data, casesType = 'cases') => (
//     data.map(country => (
//         <Circle center={[country.countryInfo.lat, country.countryInfo.lng]} fillOpacity={0.4} color={casesTypeColors[casesType].hex} fillColor={casesTypeColors[casesType].hex} >
//             <Popup>
//                 <div>
//                     <div
//                         style={{
//                             backgroundImage: `url(${country.countryInfo.flag})`,
//                             height: "50px",
//                             width: "80px",
//                             backgroundSize: "cover",
//                             borderRadius: "5px",
//                         }}
//                     ></div>
//                     <div>{country.country}</div>
//                     <div>Cases: {numeral(country.cases).format("0,0")}</div>
//                     <div>Recovered: {numeral(country.recovered).format("0,0")}</div>
//                     <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
//                 </div>
//             </Popup>
//         </Circle>
//     ))
// );



import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import "./util.css";


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

// 🔽 Sort countries by cases
export const sortData = (data) => {
  return [...data].sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

// 🔽 Format numbers (e.g. 1.2k, 3.4m)
export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

// 🔽 Draw circles on the map
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      key={country.countryInfo._id || country.country} // ✅ Added key
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  )
);
