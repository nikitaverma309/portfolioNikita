import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
//                 mx: 'auto',
const projects = [
  {
    title: "Starbuds Colorado",
    description:
      "Flutter-based App for Colorado’s Star Buds dispensaries, offering geo-restricted services for cannabis product purchases. Users can browse and make pickup reservations, with seamless payment and location-based restrictions for in-store pickups.",
    image:
      "https://starbudscolorado.com/wp-content/uploads/2022/03/Star-Buds-Logo_b.svg",
    imageStyle: {
      width: "100%",
      height: "150",
      objectFit: "contain",
      margin: "15px 0",
    },
    technologies: [
      "Flutter",
      "Dart",
      "Geo-restrictions",
      "Payment Integration",
    ],
    github: "",
    live: "https://apps.apple.com/us/app/starbuds-colorado/id6502454156",
  },
  {
    title: "BlockConnect",
    description:
      "Flutter-based app showcasing a Proof-of-Concept for connecting to Ethereum Sepolia Testnet. Features include blockchain wallet integration, message signing with Ethereum accounts, and sending test transactions—all within a sleek cross-platform Flutter UI.",
    image: "",
    technologies: [
      "Flutter",
      "Ethereum",
      "Blockchain",
      "Sepolia Testnet"
    ],
    github: "https://github.com/chiragsahu/Blockconnect",
    live: "https://youtube.com/shorts/CTOzioqrDXo",
  },
  {
    title: "PAYG",
    description:
      "A versatile payment app for both merchants and consumers. It enables users to manage expenses, credit, and accept payments, while merchants can create profiles, payment links, and network to promote their services, resulting in a 30% increase in user engagement.",
    image: "https://payg.in/images/Logos/Logos/PayG-Dark.svg",
    technologies: ["Flutter", "Dart", "Payment Management"],
    github: "",
    live: "https://play.google.com/store/apps/details?id=com.paygdigitals.payg&hl=en_IN",
  },
  {
    title: "RMM",
    description:
      "Mobile Device Management (MDM) solution for securing financed Android phones and Android TVs by monitoring EMI payments and enforcing restrictions in cases of delays or non-payment.",
    image: "",
    technologies: [
      "Kotlin",
      "Flutter",
      "Device Management",
      "Push Notifications",
    ],
    github: "",
    live: "",
  },
  {
    title: "SPGo",
    description:
      "An internal business management app with Flutter, enabling users to manage posts, articles, and schedule board meetings, streamlining communication and collaboration across executive teams.",
    image:
      "https://play-lh.googleusercontent.com/R1tduSx_TbVOGqUuuKFFiYlI4OUcWRw9bAXbDcLd6auPZpQy0pKUYpkWF_VSvtPXYw=w480-h960-rw",
    technologies: ["Flutter", "Business Management", "Collaboration"],
    github: "",
    live: "https://play.google.com/store/apps/details?id=spc.summitplanners.com&hl=en",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              color: "text.primary",
              textAlign: "center",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "4px",
                bgcolor: "primary.main",
                mt: 2,
                mx: "auto",
              },
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "background.default",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "200px",
                        height: "200px",
                        margin: "20px auto",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "white",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        image={project.image}
                        alt={project.title}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        sx={{ color: "text.primary" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: "background.paper",
                              color: "primary.main",
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      {project.github && (
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          sx={{ color: "primary.main" }}
                        >
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.live}
                          target="_blank"
                          sx={{ color: "primary.main" }}
                        >
                          Live Demo
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
