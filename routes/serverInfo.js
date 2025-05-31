
const express = require("express");
const router = express.Router();

router.get("/server-info", (req, res) => {
  const data = {
    players: "60/64",
    ping: "104ms",
    tickrate: "60 Hz",
    settings: {
      region: "EUROPE - DE",
      punkbuster: "ON",
      fairfight: "ON",
      password: "OFF",
      preset: "NORMAL"
    },
    advanced: {
      minimap: "ON",
      only_squad_leader_spawn: "OFF",
      vehicles: "ON",
      team_balance: "ON",
      minimap_spotting: "ON",
      hud: "ON",
      "3p_vehicle_cam": "ON",
      regenerative_health: "ON",
      kill_cam: "ON",
      friendly_fire: "OFF",
      "3d_spotting": "ON",
      enemy_name_tags: "ON"
    },
    rules: {
      tickets: 400,
      vehicle_spawn_delay: 25,
      bullet_damage: 100,
      kick_after_team_kills: 5,
      player_health: 100,
      player_respawn_time: 100,
      kick_after_idle: 300,
      ban_after_kicks: 3
    }
  };

  res.json(data);
});

module.exports = router;
