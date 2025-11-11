package com.flyaround.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flyaround.models.Item;
import com.flyaround.services.ServiceItem;

@RestController
@RequestMapping("/api/items")
public class ItemController {
    @Autowired
    private ServiceItem serviceItem;

     @GetMapping
    public List<Item> obtenerListaDeItems() { // Traer a todos los items
        return serviceItem.obtenerListaDeItems(); // Llamar al servicio para obtener la lista de Items();
    }
    @PostMapping
    public void crearItem(@RequestBody Item item) {
        serviceItem.guardarItem(item);
    }

    @DeleteMapping("/{id}")
    public void eliminarItem(@PathVariable Long id) {
        serviceItem.eliminarItem(id);
    }

    @GetMapping("/{id}")
    public Item obtenerItem(@PathVariable Long id) {
        return serviceItem.obtenerItem(id);
    }

    @PutMapping("/{id}")
    public void updateItem(@PathVariable Long id, @RequestBody Item item) {
        serviceItem.updateItem(id, item);
    }
}
