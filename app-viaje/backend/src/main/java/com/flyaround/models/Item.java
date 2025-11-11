package com.flyaround.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity // Indica que esta clase es una entidad JPA
@Data //Lombok genera getters, setters, toString, equals y hashCode automáticamente
@Table(name = "items") // Especifica el nombre de la tabla en la base de datos
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "item_name", nullable = false)
    private String name;

    @Column(name = "item_description", nullable = false)
    private String description;

    @Column(name = "item_price", nullable = false)
    private Double price;

    @Column(name = "item_image", nullable = false)
    private String imageUrl;
  
}
