import React from "react";
import { motion } from "framer-motion";
import { FaFigma, FaVuejs, FaReact } from "react-icons/fa";
import { SiNotion, SiBootstrap, SiJavascript } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary/45 via-black via-25% to-black/95 text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">


      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        
      >
        <svg
          width="1900"
          height="2000"
          viewBox="0 0 1742 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full h-full"  
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1089.89 -237.838L934.254 -339.082C918.303 -349.457 906.6 -357.064 896.671 -362.109C886.827 -367.111 879.046 -369.422 871 -369.422C862.955 -369.422 855.174 -367.111 845.33 -362.109C835.4 -357.064 823.698 -349.457 807.747 -339.082L652.108 -237.838L651.561 -237.482C638.641 -229.077 631.508 -224.437 623.469 -221.824C615.429 -219.212 606.931 -218.774 591.538 -217.979L590.887 -217.946L405.462 -208.371C386.459 -207.39 372.52 -206.665 361.522 -204.91C350.618 -203.171 342.964 -200.467 336.455 -195.738C329.946 -191.009 325.01 -184.566 319.986 -174.733C314.918 -164.815 309.922 -151.782 303.116 -134.013L236.711 39.3779L236.478 39.987C230.966 54.3811 227.923 62.3276 222.954 69.1667C217.985 76.0056 211.368 81.3554 199.382 91.0457L198.874 91.4559L54.4904 208.191C39.6934 220.155 28.8428 228.934 20.976 236.819C13.177 244.635 8.57448 251.321 6.08832 258.973C3.60216 266.625 3.39567 274.739 5.11081 285.647C6.84088 296.649 10.4587 310.13 15.3977 328.506L63.5915 507.814L63.7608 508.444C67.762 523.329 69.9709 531.547 69.9709 540C69.9709 548.453 67.762 556.671 63.7608 571.556L63.5915 572.186L15.3977 751.494C10.4587 769.87 6.84088 783.35 5.11081 794.353C3.39567 805.261 3.60216 813.375 6.08832 821.027C8.57448 828.679 13.177 835.365 20.976 843.181C28.8428 851.065 39.6934 859.845 54.4904 871.808L198.874 988.544L199.38 988.953C211.367 998.644 217.985 1003.99 222.954 1010.83C227.923 1017.67 230.966 1025.62 236.478 1040.01L236.711 1040.62L303.116 1214.01C309.922 1231.78 314.918 1244.81 319.986 1254.73C325.01 1264.57 329.946 1271.01 336.455 1275.74C342.964 1280.47 350.618 1283.17 361.522 1284.91C372.52 1286.66 386.459 1287.39 405.462 1288.37L590.887 1297.95L591.538 1297.98C606.931 1298.77 615.429 1299.21 623.469 1301.82C631.509 1304.44 638.642 1309.08 651.562 1317.48L652.108 1317.84L807.747 1419.08C823.698 1429.46 835.4 1437.06 845.33 1442.11C855.174 1447.11 862.955 1449.42 871 1449.42C879.046 1449.42 886.827 1447.11 896.671 1442.11C906.6 1437.06 918.303 1429.46 934.254 1419.08L1089.89 1317.84L1090.44 1317.48C1103.36 1309.08 1110.49 1304.44 1118.53 1301.82C1126.57 1299.21 1135.07 1298.77 1150.46 1297.98L1151.11 1297.95L1336.54 1288.37C1355.54 1287.39 1369.48 1286.66 1380.48 1284.91C1391.38 1283.17 1399.04 1280.47 1405.55 1275.74C1412.05 1271.01 1416.99 1264.57 1422.01 1254.73C1427.08 1244.81 1432.08 1231.78 1438.88 1214.01L1505.29 1040.62L1505.52 1040.01C1511.03 1025.62 1514.08 1017.67 1519.05 1010.83C1524.02 1003.99 1530.63 998.644 1542.62 988.953L1543.13 988.544L1687.51 871.808C1702.31 859.845 1713.16 851.065 1721.02 843.181C1728.82 835.365 1733.43 828.679 1735.91 821.027C1738.4 813.375 1738.61 805.261 1736.89 794.353C1735.16 783.35 1731.54 769.87 1726.6 751.494L1678.41 572.186L1678.24 571.555C1674.24 556.67 1672.03 548.453 1672.03 540C1672.03 531.547 1674.24 523.329 1678.24 508.445L1678.41 507.814L1726.6 328.506C1731.54 310.13 1735.16 296.649 1736.89 285.647C1738.61 274.739 1738.4 266.625 1735.91 258.973C1733.43 251.321 1728.82 244.635 1721.02 236.819C1713.16 228.934 1702.31 220.155 1687.51 208.191L1543.13 91.4559L1542.62 91.0459C1530.63 81.3555 1524.02 76.0057 1519.05 69.1667C1514.08 62.328 1511.04 54.3819 1505.52 39.9891L1505.52 39.9856L1505.52 39.9843L1505.29 39.3779L1438.88 -134.013C1432.08 -151.782 1427.08 -164.815 1422.01 -174.733C1416.99 -184.566 1412.05 -191.009 1405.55 -195.738C1399.04 -200.467 1391.38 -203.171 1380.48 -204.91C1369.48 -206.665 1355.54 -207.39 1336.54 -208.371L1151.11 -217.946L1150.46 -217.979C1135.07 -218.774 1126.57 -219.212 1118.53 -221.824C1110.49 -224.437 1103.36 -229.077 1090.44 -237.482L1089.89 -237.838ZM871 -373.422C853.202 -373.422 837.324 -363.093 805.566 -342.435L649.927 -241.191C636.487 -232.448 629.767 -228.077 622.233 -225.629C614.698 -223.18 606.692 -222.767 590.68 -221.94L405.256 -212.366C367.421 -210.412 348.503 -209.436 334.104 -198.974C319.705 -188.513 312.93 -170.823 299.381 -135.443L232.976 37.9473L232.976 37.9481L232.975 37.9486C227.242 52.9201 224.375 60.4061 219.718 66.8155C215.061 73.225 208.827 78.265 196.36 88.3446L196.36 88.345L196.36 88.3454L51.9755 205.081C22.5145 228.9 7.78398 240.81 2.28409 257.737C-3.21578 274.664 1.70109 292.957 11.5348 329.544L59.7286 508.852C63.8902 524.336 65.9709 532.077 65.9709 540C65.9709 547.923 63.8902 555.664 59.7286 571.148L11.5348 750.455C1.70109 787.043 -3.21578 805.336 2.2841 822.263C7.78398 839.19 22.5145 851.1 51.9755 874.919L196.36 991.655C208.827 1001.73 215.061 1006.77 219.718 1013.18C224.375 1019.59 227.242 1027.08 232.976 1042.05L299.381 1215.44C312.93 1250.82 319.705 1268.51 334.104 1278.97C348.503 1289.44 367.421 1290.41 405.256 1292.37L590.68 1301.94C606.692 1302.77 614.698 1303.18 622.233 1305.63C629.767 1308.08 636.487 1312.45 649.927 1321.19L805.567 1422.44C837.324 1443.09 853.203 1453.42 871 1453.42C888.798 1453.42 904.677 1443.09 936.435 1422.43L1092.07 1321.19C1105.51 1312.45 1112.23 1308.08 1119.77 1305.63C1127.3 1303.18 1135.31 1302.77 1151.32 1301.94L1336.75 1292.37C1374.58 1290.41 1393.5 1289.44 1407.9 1278.97C1422.3 1268.51 1429.07 1250.82 1442.62 1215.44L1509.02 1042.05C1514.76 1027.08 1517.63 1019.59 1522.28 1013.18C1526.94 1006.77 1533.17 1001.73 1545.64 991.654L1690.03 874.919C1719.49 851.1 1734.22 839.19 1739.72 822.263C1745.22 805.336 1740.3 787.043 1730.47 750.456L1682.27 571.148C1678.11 555.664 1676.03 547.923 1676.03 540C1676.03 532.077 1678.11 524.336 1682.27 508.852L1730.47 329.543L1730.47 329.542C1740.3 292.956 1745.22 274.663 1739.72 257.737C1734.22 240.81 1719.49 228.9 1690.03 205.081L1545.64 88.3454C1533.17 78.2652 1526.94 73.2251 1522.28 66.8155C1517.63 60.4059 1514.76 52.9197 1509.02 37.9473L1442.62 -135.443C1429.07 -170.823 1422.3 -188.513 1407.9 -198.974C1393.5 -209.436 1374.58 -210.412 1336.75 -212.366L1151.32 -221.94C1135.31 -222.767 1127.3 -223.18 1119.77 -225.629C1112.23 -228.077 1105.51 -232.448 1092.07 -241.191L936.435 -342.435C904.677 -363.093 888.798 -373.422 871 -373.422ZM1056.36 -134.648L934.254 -214.082C918.303 -224.457 906.6 -232.064 896.671 -237.109C886.827 -242.111 879.046 -244.422 871 -244.422C862.955 -244.422 855.174 -242.111 845.33 -237.109C835.4 -232.064 823.698 -224.457 807.747 -214.082L685.636 -134.648L685.089 -134.292C672.169 -125.887 665.037 -121.247 656.997 -118.635C648.957 -116.022 640.459 -115.584 625.066 -114.789L624.415 -114.756L478.935 -107.244C459.932 -106.263 445.993 -105.538 434.995 -103.783C424.091 -102.044 416.437 -99.34 409.928 -94.611C403.42 -89.8821 398.483 -83.4387 393.459 -73.6061C388.392 -63.6878 383.395 -50.6552 376.589 -32.8856L324.49 103.153L324.256 103.762C318.744 118.156 315.701 126.102 310.732 132.941C305.764 139.78 299.147 145.129 287.162 154.819L287.161 154.82L287.16 154.82L286.653 155.231L173.372 246.819C158.576 258.782 147.725 267.562 139.858 275.446C132.059 283.262 127.457 289.948 124.97 297.6C122.484 305.252 122.278 313.366 123.993 324.274C125.723 335.277 129.341 348.757 134.28 367.133L172.091 507.814L172.261 508.444C176.262 523.329 178.471 531.546 178.471 540C178.471 548.453 176.262 556.671 172.261 571.556L172.091 572.186L134.28 712.867C129.341 731.243 125.723 744.723 123.993 755.726C122.278 766.634 122.484 774.748 124.97 782.4C127.457 790.051 132.059 796.738 139.858 804.554C147.725 812.438 158.576 821.218 173.372 833.181L286.653 924.769L287.159 925.178C299.146 934.869 305.763 940.219 310.732 947.059C315.701 953.897 318.744 961.844 324.256 976.238L324.49 976.847L376.589 1112.89C383.395 1130.66 388.392 1143.69 393.459 1153.61C398.483 1163.44 403.42 1169.88 409.928 1174.61C416.437 1179.34 424.091 1182.04 434.995 1183.78C445.993 1185.54 459.932 1186.26 478.935 1187.24L624.415 1194.76L625.066 1194.79C640.459 1195.58 648.957 1196.02 656.997 1198.63C665.037 1201.25 672.17 1205.89 685.09 1214.29L685.636 1214.65L807.747 1294.08C823.698 1304.46 835.4 1312.06 845.33 1317.11C855.174 1322.11 862.955 1324.42 871 1324.42C879.046 1324.42 886.827 1322.11 896.671 1317.11C906.6 1312.06 918.303 1304.46 934.254 1294.08L1056.36 1214.65L1056.91 1214.29C1069.83 1205.89 1076.96 1201.25 1085 1198.63C1093.04 1196.02 1101.54 1195.58 1116.93 1194.79L1117.59 1194.76L1263.07 1187.24C1282.07 1186.26 1296.01 1185.54 1307.01 1183.78C1317.91 1182.04 1325.56 1179.34 1332.07 1174.61C1338.58 1169.88 1343.52 1163.44 1348.54 1153.61C1353.61 1143.69 1358.61 1130.66 1365.41 1112.89L1417.51 976.847L1417.74 976.24C1423.26 961.845 1426.3 953.898 1431.27 947.059C1436.24 940.219 1442.85 934.87 1454.84 925.179L1455.35 924.769L1568.63 833.181C1583.43 821.218 1594.28 812.438 1602.14 804.554C1609.94 796.738 1614.54 790.051 1617.03 782.4C1619.52 774.748 1619.72 766.634 1618.01 755.726C1616.28 744.723 1612.66 731.243 1607.72 712.867L1569.91 572.186L1569.74 571.555C1565.74 556.67 1563.53 548.453 1563.53 540C1563.53 531.547 1565.74 523.329 1569.74 508.445L1569.91 507.814L1607.72 367.133C1612.66 348.757 1616.28 335.277 1618.01 324.274C1619.72 313.366 1619.52 305.252 1617.03 297.6C1614.54 289.948 1609.94 283.262 1602.14 275.446C1594.28 267.562 1583.43 258.782 1568.63 246.819L1455.35 155.231L1454.84 154.821C1442.85 145.13 1436.24 139.78 1431.27 132.941C1426.3 126.103 1423.26 118.157 1417.75 103.765L1417.74 103.761L1417.74 103.76L1417.51 103.153L1365.41 -32.8856C1358.61 -50.6552 1353.61 -63.6878 1348.54 -73.6061C1343.52 -83.4387 1338.58 -89.8821 1332.07 -94.611C1325.56 -99.34 1317.91 -102.044 1307.01 -103.783C1296.01 -105.538 1282.07 -106.263 1263.07 -107.244L1117.59 -114.756L1116.93 -114.789C1101.54 -115.584 1093.04 -116.022 1085 -118.635C1076.96 -121.247 1069.83 -125.887 1056.91 -134.292L1056.36 -134.648ZM871 -248.422C853.202 -248.422 837.324 -238.093 805.566 -217.435L683.455 -138.001C670.016 -129.258 663.296 -124.887 655.761 -122.439C648.226 -119.991 640.22 -119.577 624.209 -118.751L478.729 -111.239C440.894 -109.285 421.976 -108.309 407.577 -97.8471C393.178 -87.3857 386.404 -69.6959 372.854 -34.3162L320.754 101.722C315.02 116.694 312.153 124.181 307.496 130.59C302.839 137 296.606 142.04 284.138 152.12L170.858 243.708C141.397 267.527 126.666 279.437 121.166 296.364C115.666 313.291 120.583 331.584 130.417 368.172L168.229 508.852C172.39 524.336 174.471 532.077 174.471 540C174.471 547.923 172.39 555.664 168.229 571.148L130.417 711.828C120.583 748.415 115.666 766.709 121.166 783.636C126.666 800.563 141.397 812.472 170.858 836.292L284.139 927.881C296.606 937.96 302.839 943 307.496 949.41C312.153 955.819 315.02 963.305 320.754 978.278L372.854 1114.32C386.404 1149.7 393.178 1167.39 407.577 1177.85C421.976 1188.31 440.894 1189.29 478.729 1191.24L624.209 1198.75C640.22 1199.58 648.226 1199.99 655.761 1202.44C663.296 1204.89 670.016 1209.26 683.455 1218L805.566 1297.43C837.324 1318.09 853.202 1328.42 871 1328.42C888.798 1328.42 904.677 1318.09 936.435 1297.43L1058.55 1218C1071.99 1209.26 1078.7 1204.89 1086.24 1202.44C1093.77 1199.99 1101.78 1199.58 1117.79 1198.75L1263.27 1191.24C1301.11 1189.29 1320.02 1188.31 1334.42 1177.85C1348.82 1167.39 1355.6 1149.7 1369.15 1114.32L1421.25 978.278C1426.98 963.305 1429.85 955.819 1434.5 949.41C1439.16 943 1445.4 937.96 1457.86 927.88L1571.14 836.292C1600.6 812.472 1615.33 800.563 1620.83 783.636C1626.33 766.709 1621.42 748.416 1611.58 711.828L1573.77 571.148C1569.61 555.664 1567.53 547.923 1567.53 540C1567.53 532.077 1569.61 524.336 1573.77 508.852L1611.58 368.17L1611.58 368.169C1621.42 331.583 1626.33 313.291 1620.83 296.364C1615.33 279.437 1600.6 267.527 1571.14 243.708L1457.86 152.12C1445.4 142.04 1439.16 137 1434.5 130.59C1429.85 124.181 1426.98 116.694 1421.25 101.722L1369.15 -34.3162C1355.6 -69.6959 1348.82 -87.3857 1334.42 -97.8471C1320.02 -108.309 1301.11 -109.285 1263.27 -111.239L1117.79 -118.751C1101.78 -119.577 1093.77 -119.991 1086.24 -122.439C1078.7 -124.887 1071.99 -129.258 1058.55 -138.001L936.435 -217.435C904.677 -238.093 888.798 -248.422 871 -248.422ZM934.254 -74.0817L1018.81 -19.0755L1019.36 -18.7197C1032.28 -10.3147 1039.41 -5.67456 1047.45 -3.06231C1055.49 -0.450039 1063.99 -0.0114708 1079.38 0.782902L1080.03 0.816532L1180.78 6.01819C1199.78 6.99936 1213.72 7.72437 1224.72 9.47901C1235.62 11.2184 1243.27 13.9224 1249.78 18.6513C1256.29 23.3803 1261.23 29.8237 1266.25 39.6563C1271.32 49.5746 1276.32 62.6072 1283.12 80.3768L1319.2 174.58L1319.43 175.188L1319.43 175.19C1324.94 189.584 1327.99 197.53 1332.96 204.369C1337.93 211.208 1344.54 216.558 1356.53 226.248L1357.04 226.658L1435.48 290.081C1450.28 302.044 1461.13 310.824 1468.99 318.708C1476.79 326.525 1481.4 333.211 1483.88 340.862C1486.37 348.514 1486.58 356.629 1484.86 367.536C1483.13 378.539 1479.51 392.02 1474.57 410.396L1448.39 507.814L1448.22 508.445L1448.22 508.447C1444.22 523.33 1442.01 531.547 1442.01 540C1442.01 548.453 1444.22 556.67 1448.22 571.552L1448.22 571.555L1448.39 572.186L1474.57 669.604C1479.51 687.98 1483.13 701.461 1484.86 712.464C1486.58 723.371 1486.37 731.486 1483.88 739.137C1481.4 746.789 1476.79 753.475 1468.99 761.291C1461.13 769.176 1450.28 777.956 1435.48 789.919L1357.04 853.341L1356.53 853.752C1344.54 863.442 1337.93 868.792 1332.96 875.631C1327.99 882.47 1324.94 890.417 1319.43 904.812L1319.2 905.42L1283.12 999.623C1276.32 1017.39 1271.32 1030.43 1266.25 1040.34C1261.23 1050.18 1256.29 1056.62 1249.78 1061.35C1243.27 1066.08 1235.62 1068.78 1224.72 1070.52C1213.72 1072.28 1199.78 1073 1180.78 1073.98L1080.03 1079.18L1079.38 1079.22C1063.99 1080.01 1055.49 1080.45 1047.45 1083.06C1039.41 1085.67 1032.28 1090.31 1019.36 1098.72L1018.81 1099.08L934.254 1154.08C918.303 1164.46 906.6 1172.06 896.671 1177.11C886.827 1182.11 879.046 1184.42 871 1184.42C862.955 1184.42 855.174 1182.11 845.33 1177.11C835.4 1172.06 823.698 1164.46 807.747 1154.08L723.188 1099.08L722.642 1098.72C709.721 1090.31 702.589 1085.67 694.549 1083.06C686.509 1080.45 678.011 1080.01 662.618 1079.22L661.967 1079.18L561.225 1073.98C542.222 1073 528.283 1072.28 517.285 1070.52C506.381 1068.78 498.727 1066.08 492.218 1061.35C485.71 1056.62 480.773 1050.18 475.749 1040.34C470.682 1030.43 465.685 1017.39 458.879 999.623L422.801 905.42L422.568 904.81C417.056 890.416 414.013 882.47 409.044 875.631C404.075 868.792 397.459 863.443 385.473 853.753L385.472 853.752L384.964 853.341L306.52 789.919C291.723 777.956 280.873 769.176 273.006 761.291C265.207 753.475 260.604 746.789 258.118 739.137C255.632 731.486 255.426 723.371 257.141 712.464C258.871 701.461 262.489 687.98 267.428 669.604L293.611 572.186L293.781 571.556C297.782 556.671 299.991 548.453 299.991 540C299.991 531.546 297.782 523.329 293.781 508.444L293.611 507.814L267.428 410.396C262.489 392.02 258.871 378.539 257.141 367.536C255.426 356.629 255.632 348.514 258.118 340.862C260.604 333.211 265.207 326.525 273.006 318.708C280.873 310.824 291.723 302.044 306.52 290.081L384.964 226.658L385.472 226.248L385.472 226.248C397.458 216.558 404.075 211.208 409.044 204.369C414.013 197.53 417.056 189.583 422.568 175.189L422.801 174.58L458.879 80.3768C465.685 62.6072 470.682 49.5746 475.749 39.6563C480.773 29.8237 485.71 23.3803 492.218 18.6513C498.727 13.9224 506.381 11.2184 517.285 9.47901C528.283 7.72437 542.222 6.99936 561.225 6.01819L661.967 0.816532L662.618 0.782902C678.011 -0.0114708 686.509 -0.450039 694.549 -3.06231C702.588 -5.67453 709.721 -10.3146 722.641 -18.7193L722.641 -18.7197L723.188 -19.0755L807.747 -74.0816C823.697 -84.4575 835.4 -92.064 845.33 -97.1094C855.174 -102.111 862.955 -104.422 871 -104.422C879.046 -104.422 886.827 -102.111 896.671 -97.1094C906.6 -92.064 918.303 -84.4575 934.254 -74.0817ZM805.566 -77.4346C837.324 -98.0931 853.202 -108.422 871 -108.422C888.798 -108.422 904.677 -98.0931 936.435 -77.4347L1020.99 -22.4285C1034.43 -13.686 1041.15 -9.31475 1048.69 -6.86651C1056.22 -4.41827 1064.23 -4.00491 1080.24 -3.17816L1180.98 2.0235C1218.82 3.97709 1237.73 4.95386 1252.13 15.4153C1266.53 25.8767 1273.31 43.5665 1286.86 78.9462L1322.93 173.15L1322.94 173.152C1328.67 188.123 1331.54 195.609 1336.19 202.018C1340.85 208.427 1347.08 213.467 1359.55 223.547L1359.55 223.548L1438 286.97C1467.46 310.79 1482.19 322.7 1487.69 339.626C1493.19 356.553 1488.27 374.847 1478.44 411.434L1452.25 508.852C1448.09 524.336 1446.01 532.077 1446.01 540C1446.01 547.923 1448.09 555.664 1452.25 571.148L1478.44 668.566C1488.27 705.153 1493.19 723.447 1487.69 740.373C1482.19 757.3 1467.46 769.21 1438 793.029L1359.55 856.452C1347.08 866.532 1340.85 871.572 1336.19 877.982C1331.54 884.391 1328.67 891.877 1322.94 906.846L1322.93 906.85L1286.86 1001.05C1273.31 1036.43 1266.53 1054.12 1252.13 1064.58C1237.73 1075.05 1218.82 1076.02 1180.98 1077.98L1080.24 1083.18C1064.23 1084 1056.22 1084.42 1048.69 1086.87C1041.15 1089.31 1034.43 1093.69 1020.99 1102.43L936.435 1157.43C904.677 1178.09 888.798 1188.42 871 1188.42C853.202 1188.42 837.324 1178.09 805.566 1157.43L721.007 1102.43C707.567 1093.69 700.848 1089.31 693.313 1086.87C685.778 1084.42 677.772 1084 661.762 1083.18L561.019 1077.98C523.184 1076.02 504.266 1075.05 489.867 1064.58C475.468 1054.12 468.694 1036.43 455.144 1001.05L419.066 906.85C413.332 891.878 410.465 884.392 405.808 877.982C401.151 871.572 394.917 866.532 382.45 856.452L304.005 793.029C274.544 769.21 259.814 757.3 254.314 740.373C248.814 723.446 253.731 705.153 263.565 668.566L289.749 571.148C293.91 555.664 295.991 547.923 295.991 540C295.991 532.077 293.91 524.336 289.749 508.852L263.565 411.434C253.731 374.847 248.814 356.553 254.314 339.626C259.814 322.7 274.544 310.79 304.005 286.97L382.45 223.548C394.917 213.468 401.151 208.427 405.808 202.018C410.465 195.608 413.332 188.122 419.066 173.15L455.144 78.9462C468.694 43.5665 475.468 25.8767 489.867 15.4153C504.266 4.95386 523.184 3.97709 561.019 2.0235L661.76 -3.17816H661.761C677.772 -4.00491 685.778 -4.4183 693.313 -6.86651C700.848 -9.31475 707.567 -13.6859 721.007 -22.4283L805.566 -77.4346Z"
            fill="url(#paint0_linear_40_93)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_40_93"
              x1="-51.1459"
              y1="0.219462"
              x2="1793.13"
              y2="5.16311"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CEE0FA" />
              <stop offset="0.255208" stop-color="white" />
              <stop offset="0.510417" stop-color="white" />
              <stop offset="0.776042" stop-color="white" />
              <stop offset="1" stop-color="#CEE0FA" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <div className="text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            The easiest way to create your website with{" "}
            <span className="text-primary">Golio.</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Golio gives you everything you need to create your website in
            minutes. Bootstrap code with a well-organized Figma file to design &
            develop your next websites in minutes.
          </p>

          <div className="mt-6 flex flex-col w-full md:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded-lg border border-white text-primary placeholder:text-primary w-full md:w-96 focus:outline-none"
            />
            <button className="bg-primary px-6 py-3 rounded-lg hover:bg-primary/80 font-semibold">
              Register Now
            </button>
          </div>
        </div>

      
      </div>
        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-10 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaFigma size={30} className="text-pink-500" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-10 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SiNotion size={30} className="text-gray-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-20 hidden md:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaVuejs size={30} className="text-green-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-20 hidden md:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SiBootstrap size={30} className="text-purple-500" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/5 hidden md:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SiJavascript size={30} className="text-yellow-500" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/5 hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaReact size={30} className="text-blue-400" />
        </motion.div>
    </section>
  );
};

export default HeroSection;
