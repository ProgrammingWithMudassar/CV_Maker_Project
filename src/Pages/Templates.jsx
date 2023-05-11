import React, { useEffect, useState } from "react";
import { Box, Button, Container, Divider } from "@mui/material";
import { ResumeData } from "../Data/DummyData.js";
import "./Style.css";
import { Link } from 'react-router-dom'

const Templates = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [category, setCategory] = useState("ALL");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        handleButtonClick(category);
    }, []);

    const handleButtonClick = (BtnCategory) => {

        setCategory(BtnCategory);
        setActiveCategory(BtnCategory);

        if (BtnCategory === "ALL") {
            setFilteredData(ResumeData);
        } else {
            const filtered = ResumeData.filter(obj => {
                return obj.category === BtnCategory;
            });
            setFilteredData(filtered);
        }
    };

    return (
        <Box>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        mt: 3,
                        justifyContent: { xs: "center", md: "space-between" },
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    <Button
                        sx={
                            activeCategory === "ALL" ? {
                                fontSize: { xs: "0.9rem", md: "1.2rem" },
                                p: { xs: 1, md: 2.3 },
                                opacity: 0.8,
                            }
                                : {
                                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                                    p: { xs: 1, md: 2.3 },
                                }
                        }
                        onClick={() => handleButtonClick("ALL")}
                    >
                        All
                    </Button>
                    <Button
                        sx={
                            activeCategory === "IT" ? {
                                fontSize: { xs: "0.9rem", md: "1.2rem" },
                                p: { xs: 1, md: 2.3 },
                                opacity: 0.8,
                            }
                                : {
                                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                                    p: { xs: 1, md: 2.3 },
                                }
                        }
                        onClick={() => handleButtonClick("IT")}
                    >
                        Information Technology
                    </Button>
                    <Button
                        sx={
                            activeCategory === "Health" ? {
                                fontSize: { xs: "0.9rem", md: "1.2rem" },
                                p: { xs: 1, md: 2.3 },
                                opacity: 0.8,
                            }
                                : {
                                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                                    p: { xs: 1, md: 2.3 },
                                }
                        }
                        onClick={() => handleButtonClick("Health")}
                    >
                        Health Field
                    </Button>
                    <Button
                        sx={
                            activeCategory === "Managment" ? {
                                fontSize: { xs: "0.9rem", md: "1.2rem" },
                                p: { xs: 1, md: 2.3 },
                                opacity: 0.8,
                            }
                                : {
                                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                                    p: { xs: 1, md: 2.3 },
                                }
                        }
                        onClick={() => handleButtonClick("Managment")}
                    >
                        Finance Management
                    </Button>
                    <Button
                        sx={
                            activeCategory === "Business" ? {
                                fontSize: { xs: "0.9rem", md: "1.2rem" },
                                p: { xs: 1, md: 2.3 },
                                opacity: 0.8,
                            }
                                : {
                                    fontSize: { xs: "0.9rem", md: "1.2rem" },
                                    p: { xs: 1, md: 2.3 },
                                }
                        }
                        onClick={() => handleButtonClick("Business")}
                    >
                        Business
                    </Button>
                </Box>
                <Divider variant="fullWidth" orientation="horizontal" sx={{ mt: 3 }} />
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        my: 3,
                        justifyContent: "center",
                        gap: { xs: 2, md: 4 },
                    }}
                >
                    {filteredData.map((obj) => {
                        return (
                            <Link to='/cv_form'>
                                <img
                                    key={obj.category}
                                    src={obj.img}
                                    alt=""
                                    className="TemaplateImg"
                                />
                            </Link>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Templates;
