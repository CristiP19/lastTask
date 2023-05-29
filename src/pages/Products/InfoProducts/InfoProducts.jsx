import React, {useState, useEffect} from "react";
import api from "api";
import {Link, useParams} from "react-router-dom";
import {Paper, Typography} from "@material-ui/core";
import Button from "components/common/button";
import {InfoTableStyled} from "./styled";

const InfoProducts = () => {

  const {id} = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.products().getById(id);
        setProducts(response);
      } catch (error) {
        if (error.message) {
          setError(error.message);
        } else {
          setError("An error occurred while creating the category.");
        }
      }
    };
    fetchData();
  }, []);

  return (
    <InfoTableStyled>
      <div>
        {products ? (
          <Paper className="paper">
            <Typography variant="h5" gutterBottom>
              Product details
            </Typography>
            <div>
              <Typography className="label">ID: {products.id}</Typography>
            </div>
            <div>
              <Typography className="label">Name: {products.name}</Typography>
            </div>
            <div>
              <Typography className="label">Price: {products.price}</Typography>
            </div>
            <div>
              <Typography className="label">Updated At: {products.updatedAt}</Typography>
            </div>
            <div>
              <Typography className="label">Created At: {products.createdAt}</Typography>
            </div>
            <div>
              <Typography className="label">Category Id: {products.categoryId}</Typography>
            </div>
            <div>
              <Typography className="label">Photo Id: {products.photoId}</Typography>
            </div>
            <Link to={"/productsTable"}>
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

export default InfoProducts;
