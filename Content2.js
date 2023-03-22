import React, {FlatList,View,StyleSheet,Text} from "react-native";

const data = [
  { hari: 'Senin', kegiatan: 'Hari Senin Sinta ada rapat HMIF jam 3 sore ya, rapat sama kadep dan kadiv buat bahas open recruitment. Bawa laptop untuk notulensi yaa Sintaa' },
  { hari: 'Selasa', kegiatan: 'Jam 10.00 Ngumpulin UTS Manajemen Industri di ruang prodi TSE, jangan lupa di print dulu terus di jilid. Sinta udah chat abang foto kopi jadi tinggal ambil'},
  { hari: 'Rabu', kegiatan: 'Rapat KM ITERA jam 7 malem di tukamu' },
  { hari: 'Kamis', kegiatan: 'Temu kangen with temen KKN di tansu jam 8 malemmm. harus happyy karena pasti bakal seru bangett!!' },
  { hari: 'Jumat', kegiatan: 'WAAAAA ada kuis jam 8 pagiii. Kuis sistem informasi bersama pak andre. bawa laptop!!' },
  { hari: 'Sabtu', kegiatan: 'PULANG KE TANGERANGGG. BILALLL IM COMINGGGG!!' },
  { hari: 'Minggu', kegiatan: 'nemenin mama ke pasar belanja buat persiapan lebaran idul fitri. minal aidin wal faizin pak habibb' },
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
    paddingBottom: 500,
    paddingRight: 10,
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  itemhari: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemkegiatan: {
    fontSize: 14,
    paddingLeft:67,
    paddingRight: 40
  },
});
export default Table;