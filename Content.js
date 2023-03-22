import React, {FlatList,View,StyleSheet,Text} from "react-native";

const data = [
  { hari: 'Senin', kegiatan: 'Rapat HMIF > 15.00' },
  { hari: 'Selasa', kegiatan: 'Ngumpulin UTS Manajemen Industri > 10.00' },
  { hari: 'Rabu', kegiatan: 'Rapat KM ITERA > 19.00' },
  { hari: 'Kamis', kegiatan: 'Ketemu Temen KKN > 20.00' },
  { hari: 'Jumat', kegiatan: 'KUIS > 08.00' },
  { hari: 'Sabtu', kegiatan: 'Pulang Ke Tangerang' },
  { hari: 'Minggu', kegiatan: 'Belanja Kepasar with Mom ' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemhari}>{item.hari}</Text>
    <Text style={styles.itemkegiatan}>{item.kegiatan}</Text>
  </View>
);

const Table = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 350,
    paddingRight: 10,
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  itemhari: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemkegiatan: {
    fontSize: 14,
  },
});

export default Table;
