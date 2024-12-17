import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  formHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 90
  },
  formHeaderText: {
    fontSize: 35,
    fontWeight: "bold" 
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
});

export default globalStyles;
