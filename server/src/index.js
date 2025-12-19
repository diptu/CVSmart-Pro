const app = require("./app.js");
const healthRoutes = require("./routes/health.routes.js");

const PORT = process.env.PORT || 3000;

app.use("/api", healthRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

