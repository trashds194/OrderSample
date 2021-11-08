package com.project.order.dao;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "client", nullable = false)
    private String client;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "address", nullable = false)
    private String address;

    @ManyToMany
    @JoinTable(name = "order_line",
            joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "goods_id"))
    private List<Goods> goodsList;

    @OneToMany(mappedBy = "order")
    List<OrderLine> orderLineList;

    public Order() {
    }

    public Order(int id, String client, Date date, String address) {
        this.id = id;
        this.client = client;
        this.date = date;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
