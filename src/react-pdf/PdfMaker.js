import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import robotoBlack from "../font/Roboto-Black.ttf";
import robotoLight from "../font/Roboto-Light.ttf";
import robotoMedium from "../font/Roboto-Medium.ttf";
import robotoRegular from "../font/Roboto-Regular.ttf";
import logo from "../log.jpg";
import cbLogo from "../cblogo.png";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    // border: "2px solid rgba(0, 0, 0, 0.233)",
    padding: 20,
    paddingHorizontal: 40,
    width: "100vw",
    position: "relative",
    // backgroundColor: "red",
    // backgroundImage: `url(${logo})`,
  },

  background: {
    // image: cbLogo,
    // backgroundImage: `url(${logo})`,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1, // Place the background image behind other content
    width: "100%",
    height: "100%",
    opacity: 0.3, // Optional: Adjust opacity as needed
  },
  section: {
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,
  },
  header: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "blue",
    height: "20px",
  },
  text: {
    marginVertical: 4,
    fontSize: 14,
    fontFamily: "Regular",
  },
});

Font.register({
  family: "Heavy",
  src: robotoBlack,
});
Font.register({
  family: "Regular",
  src: robotoRegular,
});
Font.register({
  family: "Light",
  src: robotoLight,
});
Font.register({
  family: "Medium",
  src: robotoMedium,
});

// Create Document Component
const MyDocument = ({ data }) => <>hello</>;

const BulletPoint = ({ full, text }) => (
  <View
    style={{
      marginLeft: 8,
      flexDirection: "row",
      width: full ? "100%" : "50%",
      alignItems: "flex-start",
      paddingVertical: 3,
    }}
  >
    <View
      style={{
        width: 5,
        height: 5,
        marginTop: 5,
        borderRadius: 100,
        backgroundColor: "black",
      }}
    />
    <Text style={{ fontSize: 14, fontFamily: "Regular", marginLeft: 8 }}>
      {text}{" "}
    </Text>
  </View>
);

/**
 *
 * @param {Object} props
 * @param {Array} props.data
 * @param {Array} props.full
 * @returns
 */
const BulletPointGroup = ({ data, full }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {data.map((text) => (
      <BulletPoint full={full} />
    ))}
  </View>
);

const SectionHeading = ({ text, data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottom: `2pt solid ${data.themeColor || "#070707"}`,
      }}
    >
      <Text
        style={{
          backgroundColor: data.themeColor || "#070707",
          padding: 4,
          fontFamily: "Medium",
          fontSize: 18,
          color: "white",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

//A function that checks if two arrays are equal
function arraysEqual(oldArr, newArray) {
  const test = new Set([...oldArr, ...newArray]);
  return test.size === oldArr.length;
}

function areEqual(prevProps, nextProps) {
  if (prevProps.data.cage !== nextProps.data.cage) {
    return false;
  }
  if (prevProps.data.duns !== nextProps.data.duns) {
    return false;
  }
  if (!arraysEqual(prevProps.data.naics, nextProps.data.naics)) {
    return false;
  }
  if (
    !arraysEqual(prevProps.data.partnersImage, nextProps.data.partnersImage)
  ) {
    return false;
  }
  if (!arraysEqual(prevProps.data.competencies, nextProps.data.competencies)) {
    return false;
  }
  if (
    !arraysEqual(prevProps.data.differentiators, nextProps.data.differentiators)
  ) {
    return false;
  }
  if (prevProps.data.logoUrl !== nextProps.data.logoUrl) {
    return false;
  }
  if (prevProps.data.aboutUs !== nextProps.data.aboutUs) {
    return false;
  }
  if (prevProps.data.themeColor !== nextProps.data.themeColor) {
    return false;
  }
  if (prevProps.data.personalName !== nextProps.data.personalName) {
    return false;
  }
  if (prevProps.data.personalAddress !== nextProps.data.personalAddress) {
    return false;
  }
  if (prevProps.data.personalMobile !== nextProps.data.personalMobile) {
    return false;
  }
  if (prevProps.data.personalEmail !== nextProps.data.personalEmail) {
    return false;
  }
  if (prevProps.data.businessAddress !== nextProps.data.businessAddress) {
    return false;
  }
  if (prevProps.data.businessMobile !== nextProps.data.businessMobile) {
    return false;
  }
  if (prevProps.data.businessEmail !== nextProps.data.businessEmail) {
    return false;
  }
  return true;
}

export default React.memo(MyDocument, areEqual);
