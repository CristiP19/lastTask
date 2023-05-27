import React, {useState, useEffect} from "react";
import api from "api";
import {Link, useParams} from "react-router-dom";
import {Paper, Typography} from "@material-ui/core";
import Button from "components/common/button";
import {InfoTableStyled} from "./styled";

const InfoCategories = () => {

  const {id} = useParams();
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.categories().getById(id);
        setCategories(response);
      } catch (error) {
        setError("An error occurred while fetching the data.");
      }
    };
    fetchData();
  }, []);

  return (
    <InfoTableStyled>
      <div>
        {categories ? (
          <Paper className="paper">
            <Typography variant="h5" gutterBottom>
              Categories
            </Typography>
            <div>
              <Typography className="label">ID: {categories.id}</Typography>
            </div>
            <div>
              <Typography className="label">Name: {categories.name}</Typography>
            </div>
            <div>
              <Typography className="label">Updated At: {categories.updatedAt}</Typography>
            </div>
            <div>
              <Typography className="label">Created At: {categories.createdAt}</Typography>
            </div>
            <Link to={"/categoriesTable"}>
              <Button type="submit">Back</Button>
            </Link>
          </Paper>
        ) : (
          <Typography>{error || "Loading..."}</Typography>
        )}
      </div>
    </InfoTableStyled>

  );
};

export default InfoCategories;
