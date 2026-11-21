import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "pacientes.enlacepaciente.com" }],
        destination: "/paciente",
      },
    ];
  },
};

export default nextConfig;
