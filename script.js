body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  text-align: center;
  width: 350px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

#display {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
  letter-spacing: 1px;
}

.buttons button {
  margin: 8px;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background: #667eea;
  color: white;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.buttons button:hover {
  background: #5a67d8;
  transform: scale(1.05);
}

#laps {
  margin-top: 25px;
  max-height: 150px;
  overflow-y: auto;
  text-align: left;
  padding: 0;
  list-style: decimal inside;
}

#laps li {
  font-size: 16px;
  padding: 5px;
  border-bottom: 1px solid #eee;
}
