package com.project.order.dao;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "goods")
public class Goods {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToMany(mappedBy = "goodsList")
    private List<Order> orderList;

    @OneToMany(mappedBy = "goods")
    List<OrderLine> orderLineList;

    public Goods() {
    }

    public Goods(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
