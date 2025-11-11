package com.flyaround.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flyaround.models.Item;
import com.flyaround.repository.ItemRepository;
@Service
public class ServiceItem {
    @Autowired
    private ItemRepository itemRepository;

     public List<Item> obtenerListaDeItems() {
        return itemRepository.findAll();
    }
    public void guardarItem(Item item) {
        itemRepository.save(item);
    }

    public void eliminarItem(Long id) {
        itemRepository.deleteById(id);
    }

    public Item obtenerItem(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

   
    public void updateItem(Long id, Item updatedItem) {
        if (itemRepository.existsById(id)) {
            updatedItem.setId(id);
            itemRepository.save(updatedItem);
        }
    }
    
}
