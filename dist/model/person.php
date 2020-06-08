<?php

function newUser ($params) {
    $sql = "INSERT INTO people (name, phone) VALUES (:name, :phone)";
    dbQuery($sql, $params);

    return true;
}