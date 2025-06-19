import PrivateRoute from './PrivateRoute'; // importe onde seu PrivateRoute está

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <RickMortyLoading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Todas as outras rotas protegidas */}
      <Route 
        path="/main" 
        element={
          <PrivateRoute>
            <Menu><Main /></Menu>
          </PrivateRoute>
        } 
      />
      <Route
        path="/footer"
        element={
          <PrivateRoute>
            <Menu><Footer insta="@marcosamiguel" whats="32 98401-5080" /></Menu>
          </PrivateRoute>
        }
      />
      <Route
        path="/Episodios"
        element={
          <PrivateRoute>
            <Menu><Episodios /></Menu>
          </PrivateRoute>
        }
      />
      <Route
        path="/personagens"
        element={
          <PrivateRoute>
            <Menu><Personagens /></Menu>
          </PrivateRoute>
        }
      />
      <Route
        path="/localizacao"
        element={
          <PrivateRoute>
            <Menu><Localizacao /></Menu>
          </PrivateRoute>
        }
      />
      <Route
        path="/sobre"
        element={
          <PrivateRoute>
            <Menu><Sobre /></Menu>
          </PrivateRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoute>
            <Menu><Erro404Rick /></Menu>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
