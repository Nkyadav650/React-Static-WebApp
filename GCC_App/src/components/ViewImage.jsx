import Image from "../buildingImage/Image";
import Base from "./globlePage/Base";

const ViewImage = () => {
    return (
        <>
            <Base>
           
                <div className="viewImage-multifamilyhomes">
                    <h3>Multifamilyhomes</h3>
                    <img src={Image.MultiFamilyHomes1} alt="Error" width="600px" height="400px" />
                    <img src={Image.MultiFamilyHomes2} alt="Error" width="600px" height="400px" />
                    <img src={Image.MultiFamilyHomes3} alt="Error" width="600px" height="400px" />

                </div>
               
                <hr />
                <h3>Apartments</h3>
                <div>
                    <img src={Image.Apartment1} alt="Error" width="600px" height="400px" />
                    <img src={Image.Apartment2} alt="Error" width="600px" height="400px" />
                    <img src={Image.Apartment3} alt="Error" width="600px" height="400px" />
                    <img src={Image.Apartment4} alt="Error" width="600px" height="400px" />
                </div>
                <hr />
                <h3>buildings</h3>
                <div>
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage2} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage3} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage4} alt="Error" width="600px" height="400px" />
                </div>
                <hr />
                <h3>SingleFamilyHomes</h3>
                <div>
                    <img src={Image.SingleFamilyHome1} alt="Error" width="600px" height="400px" />
                    <img src={Image.SingleFamilyHome2} alt="Error" width="600px" height="400px" />
                    <img src={Image.MultiFamilyHomes2} alt="Error" width="600px" height="400px" />
                </div>
                <hr/>
                <h3>All</h3>
                <div>
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />
                    <img src={Image.BuildingImage1} alt="Error" width="600px" height="400px" />

                </div>
            </Base>
        </>
    )

}
export default ViewImage;