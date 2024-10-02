import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter,Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Customers from "scenes/customers";
import Layout from "scenes/layout";

function App() {
  const mode = 'dark'
  const theme = useMemo(()=>createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/transactions" element={<Customers/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
