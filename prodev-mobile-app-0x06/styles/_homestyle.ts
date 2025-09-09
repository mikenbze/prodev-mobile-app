// styles/_homestyle.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 40,
  },
  searchGroup: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#34967C",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  filterContainer: {
    width: 80,
    alignItems: "center",
    marginHorizontal: 6,
  },
  listingContainer: {
    flex: 1,
    padding: 12,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#34967C",
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
