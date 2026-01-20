try {
  require("../src/index");
  console.log("Tests Passed ✅");
  process.exit(0);
} catch (error) {
  console.error("Tests Failed ❌", error);
  process.exit(1);
}