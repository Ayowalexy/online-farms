import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../Spinner/Spinner.jsx";
import { BulkCards, RetailCards, Center } from "./tabs.styles.jsx";

import { useEffect, useState } from "react";
import BulkData from "../../bulk-food.json";
import BulkOne from "../../components/bulk-buy/bulk-buy.component";
import RetailBuy from "../../components/retail-buy/retail-buy.component";
import "./tabs.styles.scss";
import { getProducts } from "../../redux/reducers/products/thunkAction.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const techCompanies = [
    { label: "Price high to low", value: 1 },
    { label: "Price low to high", value: 2 },
  ];
  const [value, setValue] = React.useState(0);

  const [bulkBuy, setBulkBuy] = useState([]);
  const [retailBuy, setRetailBuy] = useState([]);
  const [filteredItems, setFilteredItems] = useState("high to low");
  const [allProducts, setAllProducts] = useState(BulkData);
  const [num, setNum] = useState(12);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productReducer)

  const filteredFunction = () => {
    if (filteredItems === "Price low to high") {
      const lowToHigh = products?.sort((a, b) => a.price - b.price);
      setAllProducts(lowToHigh);
      console.log("low to high", lowToHigh);
    } else {
      const highToLow = products?.sort((a, b) => b.price - a.price);
      setAllProducts(highToLow);
      console.log("high to low", highToLow);
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadMore = () => {
    setNum(num + 4);
  };

  useEffect(() => {
    // filteredFunction();
  }, [filteredItems]);

  useEffect(() => {
    // const filteredBulkBuy = allProducts.filter(
    //   (element) => element.type === "bulk buy"
    // );
    // const filteredRetailBuy = allProducts.filter(
    //   (element) => element.type === "retail buy"
    // );

    const filteredBulkBuy = products.filter(
      (element) => element.type === "bulk buy"
    );
        const filteredRetailBuy = products.filter(
      (element) => element.type === "retail buy"
    );

    setBulkBuy(filteredBulkBuy);
    setRetailBuy(filteredRetailBuy);
  }, [filteredItems, products]);
  //console.log(bulkBuy, retailBuy);

  // useEffect(() => {
  //   const bulkDetails = BulkData.filter((element) => element.category === "oils and oilseeds")
  //   console.log(bulkDetails);
  // }, [])

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  return (
    <Box sx={{ width: "100%" }}>
      <Box
        className="tabs-head"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Bulk buy" {...a11yProps(0)} />
          <Tab label="Retail buy" {...a11yProps(1)} />
        </Tabs>
        <div className="tab-select">
          <Select
            className="select"
            options={techCompanies}
            onChange={(e) => setFilteredItems(e.label)}
          />
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <BulkCards>
          {bulkBuy
            ?.filter((_, bulkInfo) => bulkInfo < num)
            ?.map((bulkInfo) => (
              <BulkOne bulkInfo={{...bulkInfo, id: bulkInfo?._id}} key={bulkInfo._id} />
            ))}
        </BulkCards>
        <Center>
          <button className="button button-1" onClick={() => loadMore()}>
            {" "}
            LOAD MORE
          </button>
        </Center>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RetailCards>
          {retailBuy
            ?.filter((_, retailInfo) => retailInfo < num)
            ?.map((retailInfo) => (
              <RetailBuy retailInfo={{...retailInfo, id: retailInfo?._id}} key={retailInfo._id} />
            ))}
        </RetailCards>
        <Center>
          <button className="button button-1" onClick={() => loadMore()}>
            {" "}
            LOAD MORE
          </button>
        </Center>
      </TabPanel>
    </Box>
  );
}
