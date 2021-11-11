package com.project.order.repository;

import com.project.order.dao.Goods;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@DataJpaTest
public class GoodsRepositoryIntegrationTest {
    @Autowired
    private TestEntityManager testEntityManager;

    @Autowired
    private GoodsRepository goodsRepository;

    @Test
    public void whenFindByName_thenReturnGoods() {
        Goods milk = new Goods("milk", 70);
        testEntityManager.persist(milk);
        testEntityManager.flush();

        Goods found = goodsRepository.getById(milk.getId());

        assertThat(found.getId())
                .isEqualTo(milk.getId());
    }
}
